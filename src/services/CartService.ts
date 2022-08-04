import { Cart, CartItems } from "../models"
import { CartItemsCreationAttributes } from "../models/CartItems"

export const CartServices = {
    create: async (userId: number) =>{
        const cart = await Cart.findOrCreate({
            where:{
                userId,
                status:'aberto'
            }
        })
        return cart
    },
    findByUser: async (userId: number) =>{
        const cart = await Cart.findOne({
            where:{
                userId,
                status: 'aberto'
            },
            include:{
                association:'cartitems'
            }
        })
        
        return cart
    },
    addProduct: async (attributes: CartItemsCreationAttributes)=>{
        const newProduct = await CartItems.create(attributes)
        return newProduct
    },
    deleteItem: async (id: number, cartId: number) =>{
        await CartItems.destroy({
            where:{
                id,
                cartId
            }
        })
    },
    updateQuantityItem: async (newQuantity: number, id:number, cartId:number) =>{
        const [affectedRows, updateItem] = await CartItems.update({
            quantity: newQuantity
        },{
            where:{
                id,
                cartId
            },
            returning:true
        })
        return updateItem[0]
    } 
}