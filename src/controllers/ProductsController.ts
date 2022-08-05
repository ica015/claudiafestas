import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { authenticatedRequest } from "../middlewares/auth";
import { Product } from "../models";
import { FavoriteServices } from "../services/FavoriteService";
import { LikeService } from "../services/LikeService";
import { ProductsService } from "../services/ProductsService";
import { visitedServices } from "../services/visitedService";

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
        const userId = req.body.id //definir melhor onde será encontrada a informação do userId
        const productId = req.params.id
        try {
            const showProduct = await ProductsService.findById(productId)
            if (!showProduct) return res.status(404).json({message: 'Produto não encontrado'})
            
            if (!userId) return res.json({...showProduct.get(), liked:false, favorited:false})

            const liked = await LikeService.isLiked(userId, Number(productId))
            const favorited = await FavoriteServices.isFavorited(userId, Number(productId))
            
            // //salva o produto no histórico de visitas do usuário
            const [visited, createdNew] = await visitedServices.create(userId, Number(productId))
            if (!createdNew){
                await visitedServices.update(userId, Number(productId))
            }

            return res.json({ ...showProduct.get() , liked, favorited})

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
    },
    //GET /produtos/populares
    popular: async (req: Request, res: Response)=>{
        try {
            const topTen = await ProductsService.getTopTenByLikes()
            return res.json(topTen)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }
    
}