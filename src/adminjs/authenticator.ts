import { AuthenticationOptions } from "@adminjs/express";
import { User } from "../models";
import bcrypt from 'bcrypt'

export const authenticatorOptions:AuthenticationOptions = {
    authenticate: async (email, password) => {
        const user = await User.findOne({where: { email: email } })
        if (user) {
            const matched = await bcrypt.compare(password, user.password)

            if (matched && user.admin){
                return user
            }
        }
        return false
    },
    cookiePassword: 'senha-de-cookie'
}