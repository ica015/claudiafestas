import { Category, CategoryProduct } from "../models"

export const categoryService = {
    findAllPaginated: async (page:number, perPage:number) =>{
        const offset = (page - 1)* perPage
        const {count, rows} = await Category.findAndCountAll({
            where:{$active$:true},
            attributes:['id', 'name'],
            limit: perPage,
            offset
        })
        return {
            categories: rows,
            page,
            perPage,
            total: count
        }
    },
    findByIdwithProducts: async (id: string) =>{
        const CategoryWithProducts = await Category.findByPk(id,{
             attributes:['id','name', 'active'],
            include:[
                {
                    model:CategoryProduct,
                    as:'categoryproducts'
                },
            ]

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
            return {
                CategoryInfo, 
                Product: ProductDetail.map(detail => detail.product)
            }
        }else{
            return 'Categoria Não enontrada ou Inativa'
        }
        // return CategoryWithProducts
    }
}