import { where } from "sequelize/types"
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
            
            attributes:['id','name'],
            include:[
                {model: Category, as:'catproducts'},
                {model: Product, as:'prodcategories'},
                {
                    where:{$active$: true}
                }
            ]
            }
        )
        return CategoryWithProducts
    }
}