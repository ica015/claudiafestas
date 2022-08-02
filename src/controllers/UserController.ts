import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

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
    //PUT /usuario/dados
    update: async (req: authenticatedRequest, res: Response)=>{
        const { id } = req.user!
        const { name, email, nickname, birth, cpf, phone, celphone } = req.body
        try {
            const updatedUser = await userService.update(id, {
                name, 
                email,
                nickname, 
                birth, 
                cpf, 
                phone, 
                celphone
            })
            return res.json(updatedUser)
        } catch (err) {
            if (err instanceof Error){
                res.status(400).json({message: err.message})
            }
        }

    }
}