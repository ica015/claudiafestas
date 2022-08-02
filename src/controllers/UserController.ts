import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";

export const usersController = {
    //GET /usuario/dados
    show: async (req: authenticatedRequest, res: Response) =>{
        try {
            const currentUser = req.user!
            return res.json(currentUser)
        } catch (err) {
            if (err instanceof Error){
                res.status(400).json({message: err.message})
            }
        }
    },
}