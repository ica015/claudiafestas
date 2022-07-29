import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { FavoriteServices } from "../services/FavoriteService";

export const FavoriteController = {
    //POST /favoritos
    save: async (req: authenticatedRequest, res: Response)=>{
        const userId = req.user!.id
        const { productId } = req.body

        try {
            const favorite = await FavoriteServices.create(userId, Number(productId))
            return res.status(201).json({favorite})
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }
}