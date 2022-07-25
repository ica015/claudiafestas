import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { categoryService } from "../services/CategoriesService";

export const catetegoriesController = {
    //GET /categories
    index: async (req: Request, res: Response) =>{
        const [page, perPage] = getPaginationParams(req.query);
        try {
            const PaginatedCategory = await categoryService.findAllPaginated(page, perPage)
            return res.json(PaginatedCategory)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }        
    },
    //GET /categories/:id
    show: async (req: Request, res: Response) => {
        const {id} = req.params
        const [page, perPage] = getPaginationParams(req.params)

        try {
            const category = await categoryService.findByIdwithProducts(id)
            return res.json(category)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }
}