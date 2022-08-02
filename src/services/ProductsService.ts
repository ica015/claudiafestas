import { fn, Op, where } from "sequelize"
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
    },
    getLastUploadedProducts: async () =>{
        const featuredProducts = await Product.findAll({
            limit: 10,
            where:{
                active: true},
            order: [['createdAt', 'DESC']]
        })
        return featuredProducts
    },
    findByName: async (name: string, page:number, perPage:number) =>{
        const offset = (page - 1)* perPage
        const { count, rows} = await Product.findAndCountAll({
            where:{
                [Op.or]:[
                    {
                        name:{
                            [Op.iLike]: `%${name}%`
                        }
                    },
                    // {
                    //     description: `%${name}%`
                    // }
                    // {
                    //     description:{
                    //         [Op.substring]: toString(name)
                            
                    //     }
                    // }
                ]
            },
            limit: perPage,
            offset
        })
        return {
            produtos: rows,
            page,
            perPage,
            total: count
        }
    },
    getTopTenByLikes: async () => {
        const result = await Product.sequelize?.query(
            `SELECT
                products.id,
                products.name,
                products.image_url AS imageUrl,
                products.featured,
                products.description,
                products.active,
                COUNT(users.id) AS likes
            FROM products
                LEFT OUTER JOIN likes
                    ON products.id = likes.product_id
                    INNER JOIN users
                        ON users.id = likes.user_id
            GROUP BY products.id
            ORDER BY likes DESC
            LIMIT 10;
            `
        )
        if (result){
            const [topTen] = result
            return topTen
        }else{
            return null
        }
    }
}