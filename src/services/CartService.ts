import { Model } from "sequelize/types"
import { Cart, CartItems, Options, Product } from "../models"
import { CartItemsCreationAttributes } from "../models/CartItems"

export const CartServices = {
    create: async (userId: number, addressId: number) =>{
        const cart = await Cart.findOrCreate({
            where:{
                userId,
                addressId,
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
            attributes:['id','userId','addressId','status'],
            include:[
                {
                    model: CartItems,
                    as: 'cartitems',
                    attributes:['id','quantity'],
                    include:[
                        {
                            model:Product,
                            attributes:['id','name','imageUrl','description'],
                        },
                        {
                            model: Options,
                            attributes:['id','description','oldPrice', 'newPrice']
                        }
                    ]
                }
            ]
        })
        
        return cart
    },
    addProduct: async (attributes: CartItemsCreationAttributes)=>{
        const productExist = await CartItems.findOne({
            where:{
                id: attributes.productId
            }
        })
        if (productExist){
            const newQuantity = productExist.quantity + attributes.quantity
            const updateQuantity = await CartServices.updateQuantityItem(newQuantity, productExist.id, attributes.cartId)
            return updateQuantity
        }
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
    },
    updateAddress: async (newAdrressId: number, cartId: number, userId:number)=>{
        const [affectedRows, updatedAddress] = await Cart.update({
            addressId: newAdrressId
        },{
            where:{
                id:cartId,
                userId
            },
            returning:true
        })
        return updatedAddress[0]
    },
    closeCart: async (id:number, userId: number) =>{
        const [affectedRows, closeCart] = await Cart.update({
            status:"fechado"
        },{
            where:{
                id,
                userId
            },
            returning: true
        })
        return closeCart[0]
    }
}