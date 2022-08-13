import { where } from "sequelize"
import { AddressCreationAttributes } from "../models/Address"
import { Pix } from "../models/Pix"
import { PurchasesCreationAttributes } from "../models/Purchase"

export const PixServices ={
    findAndUpdateData: async (pixkey:string, main:boolean)=>{
        if (main === true){
            const findData = await Pix.findOne({
                where:{
                    main: true
                }
            })
            await Pix.update({
                main: false
            },{
                where:{
                    pixkey: findData?.pixkey
                
                }
            })
        }
        const data = await Pix.findOrCreate({
            where:{
                pixkey,
                main
            }

        })
        
        return data
    },
    findMainKey: async ()=>{
        const mainKey = Pix.findOne({
            where:{
                main: true
            }
        })
        return mainKey
    },
    pixGenerator: async (name: string, address:AddressCreationAttributes, totalPaid:number) =>{
        const receiverKey = await PixServices.findMainKey()

        if (!receiverKey) return "Chave Pix não encontrada"
        const pixData = {
            pixkey:receiverKey.pixkey,
            merchant: name,
            city: address.city,
            cep:address.postalCode,
            code:'RQP',
            amount: totalPaid
        }
        return pixData
    }
}