import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { Cart } from "../models";
import { AddressServices } from "../services/AddressService";
import { CartServices } from "../services/CartService";

export const CartController = {
    //POST /carrinho
    novoProduto: async (req:authenticatedRequest, res:Response)=>{
        const userId = req.user!.id
        const itemDeatis = req.body
        try {
            const address = await AddressServices.findMainAddress(userId)
            const addressId = address?.id
            const [ cart, createdNew]  = await CartServices.create(userId, Number(addressId))
            const newProduct = await CartServices.addProduct({
                cartId: cart.id,
                productId: itemDeatis.productId,
                quantity: itemDeatis.quantity,
                optionId: itemDeatis.optionId
            })
            return res.json(newProduct)
            // return res.json(newCart)
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
     //GET /carrinho
     listCart: async (req:authenticatedRequest, res:Response)=>{
        const userId = req.user!.id
        try {
            const listCart = await CartServices.findByUser(userId)
            return res.json(listCart)
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
    removerItem: async (req:authenticatedRequest, res:Response) =>{
        const userId = req.user!.id
        const cartItemId = req.params.id
        try {
            const cart = await CartServices.findByUser(userId)
            await CartServices.deleteItem(Number(cartItemId), cart!.id)
            res.status(204).send()
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
    updateQuantityItem: async (req: authenticatedRequest, res: Response)=>{
        const userId = req.user!.id
        const { id, quantity} = req.body
        
        try {
            if (quantity<=0) throw new Error("A quantidade tem que ser maior que 0 (zero)")
            const cart = await CartServices.findByUser(userId)
            if (!cart) throw new Error('Erro de validação')
            
            const updateCartItem = await CartServices.updateQuantityItem(quantity, id, cart!.id)
            return res.json(updateCartItem)
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            } 
        }
    },
    updateShippingAddress: async(req:authenticatedRequest, res:Response) =>{
        const userId = req.user!.id
        const {cartId, addressId} = req.body
        try {
            const updateShippingAdrress = await CartServices.updateAddress(addressId, cartId, userId)
            return res.json(updateShippingAdrress)
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            } 
        }
    }
}