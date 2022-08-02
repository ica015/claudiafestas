import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { LikeService } from "../services/LikeService";

export const LikeController = {
    //POST /like
    save: async (req: authenticatedRequest, res: Response) =>{
        const userId = req.user!.id
        const { productId } = req.body

        try {
            const like = await LikeService.create(userId, productId)
            res.status(201).json(like)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
    delete: async (req: authenticatedRequest, res: Response) =>{
        const userId = req.user!.id
        const productId = req.params.id

        try {
            await LikeService.delete(userId, Number(productId))
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }
}