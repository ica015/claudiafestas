import { stringify } from "querystring"
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
    cartCreateLocalStorage: async () => {
        localStorage.setItem('cartId', '-1')
        localStorage.setItem('userId', '-1')
        localStorage.setItem('addressId', '-1')
        localStorage.setItem('status', 'aberto')

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
    productExistLocalStorage: async (productId: string) =>{
        if (!localStorage) return ""
        for (let i=0; i<localStorage.length;i++){
            let key = localStorage.key(i)
            if (key == `product${i}`){
                let product = JSON.parse(localStorage.getItem(key)!)
                if ( product.productId == productId){
                    return key
                }
            }
        }
        return ""
    },
    addProductLocalStorage: async(attributes: CartItemsCreationAttributes) =>{
        const key = await CartServices.productExistLocalStorage(String(attributes.productId))
        if (key != ""){
            let update = {
                productId:attributes.productId, 
                quantity: attributes.quantity, 
                optionId: attributes.optionId
            }
            localStorage.setItem(key, JSON.stringify(update))
            let value = localStorage.getItem(key)
            return (key + " -> " + value)
        }else{
            const newProduct = {
                productId:attributes.productId, 
                quantity: attributes.quantity, 
                optionId: attributes.optionId
            }
            localStorage.setItem(key, JSON.stringify(newProduct))
            return "Produto incluído com sucesso"
        }
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