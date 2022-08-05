import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { AddressServices } from "../services/AddressService";

export const AddressController = {
    create: async (req: authenticatedRequest, res: Response) =>{
        const userId = req.user!.id
        const { mainAddress, contactName, contactPhone, address, number, complement,
            neighborhood, city, state, postalCode, additionalInformation } = req.body
        
        try {
            const addAdress = await AddressServices.addAdress({
                userId,
                mainAddress,
                contactName,
                contactPhone,
                address,
                number,
                complement,
                neighborhood,
                city,
                state,
                postalCode,
                additionalInformation
            })
            return res.json(addAdress)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message:err.message})
            }
        }
    },
    show: async (req:authenticatedRequest, res: Response) =>{
        const userId = req.user!.id
        try {
            const listAll = await AddressServices.show(userId)
            return res.json(listAll)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message:err.message})
            }
        }
    },
    update: async(req: authenticatedRequest, res:Response) =>{
        const userId = req.user!.id
        //const { id } = req.params
        const { mainAddress, contactName, contactPhone, address, number, complement,
            neighborhood, city, state, postalCode, additionalInformation, id} = req.body 
        try {
            const addressUpdate = await AddressServices.updateAddress(Number(id), userId,{
                mainAddress,
                contactName,
                contactPhone,
                address,
                number,
                complement,
                neighborhood,
                city,
                state,
                postalCode,
                additionalInformation
            })
            return res.json(addressUpdate)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message:err.message})
            }
        }
    },
    delete: async (req: authenticatedRequest, res: Response)=>{
        const userId = req.user!.id
        const id = Number(req.params.id)
        try {
            await AddressServices.delete(userId, id)
            res.status(204).send()
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message:err.message})
            }
        }
    }
}