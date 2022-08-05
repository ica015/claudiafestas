import { Visit } from "../models"

export const visitedServices = {
    create: async (userId:number, productId:number) =>{
        const addVisited = await Visit.findOrCreate({
            where:{
                userId,
                productId
            }
        })
        return addVisited
    },
    show: async (userId:number) =>{
        const listAll = Visit.findAll({
            where:{
                userId
            },
            order:[['updated_at', 'DESC']]
        })
        return listAll
    },
    update: async (userId:number, productId:number) =>{
        const updateVisited = await Visit.update({
            productId
        },{
            where:{
                userId,
                productId
            },
            returning:true
        })
        return updateVisited
    }
}