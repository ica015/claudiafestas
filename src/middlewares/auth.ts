import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import { UserInstance } from "../models/User";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";

export interface authenticatedRequest extends Request{
    user?: UserInstance | null
}

export function ensureAuth(req: authenticatedRequest, res: Response, next: NextFunction){
    const autorizationHeader = req.headers.authorization

    if (!autorizationHeader) return res.status(401).json({
        message: "Acesso NÃO autorizado. Token não encontrado"
    })

    const token = autorizationHeader.replace(/Bearer /, '')

    jwtService.verifyToken(token, (err, decoded) => {
        if (err || typeof decoded === 'undefined') return res.status(401).json({
            message: 'Acesso NÃO autorizado. Token inválido' 
        })

        userService.findByEmail((decoded as JwtPayload).email).then(user => {
            req.user = user
            next()
        })
    })
}