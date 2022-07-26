import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { ProductsService } from "../services/ProductsService";

export const productsController = {
    // GET '/'
    index: async (req: Request, res: Response) =>{
        const [page, perPage] = getPaginationParams(req.query)
        try {
            const PaginatedProducts = await ProductsService.findAllRandomPaginated(page, perPage)
            return res.json(PaginatedProducts)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
    //GET '/produto/:id'
    show: async(req: Request, res:Response) =>{
        const { id } = req.params
        try {
            const showProduct = await ProductsService.findById(id)
            return res.json(showProduct)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }
}