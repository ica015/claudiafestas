import { User } from "../models"
import { UserCreationAttributes } from "../models/User"

export const userService = {
    findByEmail: async (email: string) =>{
        const user = await User.findOne({
            where:{
                email
            }
        })
        return user
    },
    create: async (attributes: UserCreationAttributes) =>{
        const user = await User.create(attributes)
        return user
    },
    update: async (id: number, attributes:{
        name: string
        email:string
        nickname: string
        birth: Date
        cpf: string
        phone:string
        celphone:string
    }) =>{
        const [affectedRows, UpdatedUser] = await User.update(attributes,{where: {id}, returning:true})
        return UpdatedUser[0]
    }
}