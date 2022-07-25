import { Association, where } from "sequelize/types"
import { catProductsResourceOptions } from "../adminjs/resources/catproducts"
import { Category, CategoryProduct, Product } from "../models"

export const categoryService = {
    findAllPaginated: async (pag:number, porPag:number) =>{
        const offset = (pag - 1)* porPag
        const {count, rows} = await Category.findAndCountAll({
            where:{$active$:true},
            attributes:['name'],
            limit: porPag,
            offset
        })
        return {
            categories: rows,
            pag,
            porPag,
            total: count
        }
    },
    findByIdwithProducts: async (id: string) =>{
        const CategoryWithProducts = await Category.findByPk(id,{
             attributes:['id','name', 'active'],
            include:{
                association: 'catproducts'
            }
        })
        if (CategoryWithProducts?.active){
            const CategoryInfo = {
                'Id': CategoryWithProducts.id,
                'Categoria': CategoryWithProducts.name}
            const ProductDetail = await CategoryProduct.findAll({
                attributes: ['categoryId'],
                where:{
                    categoryId: id
                },
                include:{
                    association:'product',
                    where:{
                        $active$:true
                    }
                }
            })
            return [CategoryInfo, ProductDetail]
        }else{
            return 'Categoria Não enontrada ou Inativa'
        }
        // return CategoryWithProducts
    }
}