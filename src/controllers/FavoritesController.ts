import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { FavoriteServices } from "../services/FavoriteService";

export const FavoriteController = {
    //GET /favoritos
    index: async (req: authenticatedRequest, res: Response) =>{
        const userId = req.user!.id

        try {
            const favorites = await FavoriteServices.findByUserId(userId)
            return res.status(201).json(favorites)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
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
    },
    //DELETE /favoritos/:id
    delete: async (req: authenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const productId = req.params.id

        try {
            await FavoriteServices.delete(userId, Number(productId))
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }
}