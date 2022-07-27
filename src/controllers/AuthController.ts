import { Request, Response } from "express";
import { userInfo } from "os";
import { userService } from "../services/userService";

export const authController = {
    register: async (req: Request, res: Response) =>{
        const {email, password, name, nickname, cpf, phone, celphone} = req.body
        try {
            const userAlreadyExists = await userService.findByEmail(email)
            if (userAlreadyExists){
                throw new Error('Este e-mail já está cadastrado')
            }

            const user = await userService.create({
                name,
                email,
                password,
                nickname,
                cpf,
                phone,
                celphone
            })
            return res.status(201).json(user)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }
}