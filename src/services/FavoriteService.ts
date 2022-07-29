import { Favorite } from "../models"

export const FavoriteServices = {
    create: async (userId: number, productId: number) => {
        const favorite = Favorite.create({
            userId,
            productId
        })
        return favorite
    }
}