import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { visitedServices } from "../services/visitedService";

export const VisitedController = {
    index: async (req:authenticatedRequest, res: Response) =>{
        const userId = req.user!.id
        try {
            const listAll = await visitedServices.show(userId)
            return res.json(listAll)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
        
    }
}