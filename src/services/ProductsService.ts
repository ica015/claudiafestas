import { fn } from "sequelize"
import { Product } from "../models"

export const ProductsService = {
    findAllRandomPaginated: async (page: number, perPage:number) =>{
        const offset = (page - 1) * perPage
        const {count, rows} = await Product.findAndCountAll({
            where: {active: true},
            order: fn('RANDOM'),
            limit: perPage,
            offset
        }) 
        return {
            products: rows,
            page,
            perPage,
            total: count
        }
    },
    findById: async (id: string) =>{
        const showProduct = await Product.findByPk(id,{
        })
        if (showProduct?.active){
            return showProduct
        }else{
            return ('Produto não encontrado')
        }
    },
    getRandomFeaturesProducts: async () =>{
        const featuredProducts = await Product.findAll({
            where:{
                featured:true,
                active: true},
            order: fn('RANDOM')
        })
        return featuredProducts.slice(0,5)
    }
}