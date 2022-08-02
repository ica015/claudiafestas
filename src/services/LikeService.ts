import { Like } from "../models"

export const LikeService = {
    create: async (userId: number, productId: number) =>{
        const like = await Like.create({
            userId,
            productId
        })
        return like
    },
    delete: async (userId: number, productId: number) =>{
        await Like.destroy({
            where:{
                userId,
                productId
            }
        })
    },
    isLiked: async (userId:number, productId:number) =>{
        const like = await Like.findOne({
            where:{
                userId,
                productId
            }
        })
        return like!== null ? true:false
    }
}