import { where } from "sequelize/types";
import { Address, AddressCreationAttributes } from "../models/Address";

export const AddressServices = {
    addAdress: async ( attributes: AddressCreationAttributes) =>{
        const address = await Address.create(attributes)
        return address
    },
    show: async (userId:number) =>{
        const listAll = await Address.findAll({
            where:{ userId},
            order:[['updated_at', 'DESC']]
        })
        return listAll
    },
    updateAddress: async (id:number, userId:number, attributes:{
        mainAddress: boolean
        contactName: string
        contactPhone: string
        address: string
        number: number
        complement: string
        neighborhood: string
        city: string
        state: string
        postalCode: string
        additionalInformation: string
    }) =>{
        const [affectedRows, UpdateAddress] = await Address.update(attributes,{where:{id, userId}, returning:true })
        return UpdateAddress[0]
    },
    delete: async (userId:number, id:number)=>{
        await Address.destroy({
            where:{
                id,
                userId
            }
        })
    },
    findById: async (userId: number, id:number)=>{
        const address = await Address.findOne({
            where:{
                id,
                userId
            }
        })
        return address
    },
    findMainAddress: async (userId: number)=>{
        const address = await Address.findOne({
            where:{
                userId,
                mainAddress: true
            }
        })
        return address
    }
}