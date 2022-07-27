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
    //GET '/produtos/destaques'
    features: async(req: Request, res:Response) =>{

        try {
            const featuredProducts = await ProductsService.getRandomFeaturesProducts()
            return res.json(featuredProducts)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
    //GET '/produtos/destaques'
    lastUploaded: async(req: Request, res:Response) =>{

        try {
            const lastUploadedProducts = await ProductsService.getLastUploadedProducts()
            return res.json(lastUploadedProducts)
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
    },
    //GET procustos/busca?produto=
    findProduct: async (req:Request, res:Response) => {
        const [page, perPage] = getPaginationParams(req.query)
        const { produto } = req.query
        try {
            if (typeof produto !== 'string') throw new Error('O tipo de parametro deve ser um texto')
            const findprod = await ProductsService.findByName(produto, page, perPage)
            return res.json(findprod)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }
    
}