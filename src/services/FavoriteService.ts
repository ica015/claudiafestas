import { Favorite } from "../models"

export const FavoriteServices = {
    findByUserId: async(userId:number) =>{
        const favorites = await Favorite.findAll({
            attributes:[['user_id', 'userId']],
            where:{
                userId
            },
            include:{
                association: "product",
                attributes:[
                    'id',
                    'name',
                    ['image_url', 'imageUrl'],
                    'description',
                    'active'
                ]
            }
        })
        return {
            userId,
            Product: favorites.map(favorite => favorite.product)
        }
    },
    create: async (userId: number, productId: number) => {
        const favorite = Favorite.create({
            userId,
            productId
        })
        return favorite
    },
    delete: async (userId: number, productId: number) => {
        await Favorite.destroy({
            where:{
                userId,
                productId
            }
        })
    },
    isFavorited: async (userId: number, productId: number) =>{
        const favorited = await Favorite.findOne({
            where:{
                userId,
                productId
            }
        })
        return favorited !== null ? true:false 
    }
}