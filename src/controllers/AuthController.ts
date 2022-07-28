import { Request, Response } from "express";
import { userInfo } from "os";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";

export const authController = {
    // POST /cadastro
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
    },
    // POST /login
    login: async (req: Request, res: Response) => {
        const {email, password, staylogged} = req.body
        let expiration = ''
        try {
            const user = await userService.findByEmail(email)
            if (!user) return res.status(404).json({message: "E-mail não encontrado."})

            user.checkPassword(password, (err, isSame)=>{
                if (err) return res.status(400).json({message: err.message})
                if (!isSame) return res.status(401).json({message: "Senha incorreta"})
                if (staylogged){
                    expiration = '7d'
                }else{
                    expiration = '1d'
                }
                const payload = {
                    id: user.id,
                    nickname: user.nickname,
                    email: user.email
                }
                const token = jwtService.signToken(payload,expiration)
                return res.json({authenticated: true, ...payload, token})
            })
        } catch (err) {
            if (err instanceof Error){
                res.status(400).json({message: err.message})
            }
        }
    }
}