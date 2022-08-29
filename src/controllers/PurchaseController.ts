import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { AddressServices } from "../services/AddressService";
import { CartServices } from "../services/CartService";
import { PixServices } from "../services/PixService";
import { PurchaseItemsServices } from "../services/PurchaseItemsService";
import { PurchaseServices } from "../services/PurchaseService";

export const PurchaseController = {
    create: async (req:authenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const userName = req.user!.name
        const paymentMethod = req.body
        try {
            const hasCart = await CartServices.findByUser(userId)
            if (hasCart == null) throw new Error("Você ainda não possui um carrinho de compras")
            if (!hasCart.cartitems) throw new Error("Por favor, adicione produtos em seu carrinho de compras!")

            const shipping = await AddressServices.findById(userId, hasCart.addressId)
            const shippingAddress = [shipping?.address, shipping?.number, shipping?.complement, shipping?.neighborhood, shipping?.city, shipping?.state, shipping?.postalCode].join(', ')
            
            //criar a tabela de compras
            const [Purchase, createdNew] = await PurchaseServices.createPurchase({
                userId,
                cartId: hasCart.id,
                shippingAddress,
            })
            const purchaseId = Purchase.id

            //incluir os itens na tabela de itens da compra
            let items = JSON.stringify(hasCart.cartitems)
            let cartItems = JSON.parse(items)
            for (let i=0;i<cartItems.length;i++){
                let attributes = {
                    purchaseId: purchaseId,
                    productId: cartItems[i].product.id,
                    productName: cartItems[i].product.name,
                    variation: cartItems[i].option.description,
                    quantity: cartItems[i].quantity,
                    price: cartItems[i].option.newPrice,
                    discount: 0,
                    totalPrice: (cartItems[i].option.newPrice * cartItems[i].quantity),
                    shippingCost: 0,
                }
                let updatePrices= {
                    totalPrice: attributes.totalPrice,
                    shippingCost: attributes.shippingCost,
                    discount: attributes.discount,
                    totalPaid: (attributes.totalPrice + attributes.shippingCost - attributes.discount)
                }
                await PurchaseItemsServices.createPurchaseItems(attributes)
                await PurchaseServices.updatePrices(purchaseId, updatePrices)
            }
            if (paymentMethod === "PIX"){
                const totalPaid = await PurchaseServices.index(purchaseId, userId)
                const pixData = await PixServices.pixGenerator(userName, shipping!, Number(totalPaid?.totalPaid))
            }

            const closeCart = await CartServices.closeCart(hasCart.id, userId)
            
            return res.json(Purchase)
        } catch (err) {
            if (err instanceof Error){
                    return res.status(400).json({message: err.message})
                }
        }
        

    },
    index: async(req: authenticatedRequest, res:Response)=>{
        const userId = req.user!.id
        const purchaseId = req.params.id
        try {
            const listPurchase = await PurchaseServices.index(Number(purchaseId), userId)
            // console.log(listPurchase)
            return res.json(listPurchase)
        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }

}