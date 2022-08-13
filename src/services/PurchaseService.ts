import { Purchases, PurchasesCreationAttributes } from "../models/Purchase";

export const PurchaseServices = {
    index: async(id: number, userId:number)=>{
        //Lista a compra com todos os itens e valores
        const PurchaseWithItems = await Purchases.findOne({
            where:{
                id,
                userId
            },
            include:'purchaseItems'
        })
        return PurchaseWithItems
    },
    createPurchase: async (attributes: PurchasesCreationAttributes) =>{
        const purchase = await Purchases.findOrCreate({
            where:{
                userId: attributes.userId,
                cartId: attributes.cartId,
                status: 'Pendente',
                shippingAddress: attributes.shippingAddress
            }
        })
        return purchase
    },
    updatePrices: async (id: number, attributes:{
        totalPrice:number
        shippingCost:number
        discount: number
        totalPaid: number
    } ) =>{
        const updatePrices = await Purchases.increment({
            productsTotal: attributes.totalPrice,
            shippingTotal: attributes.shippingCost,
            totalDiscount: attributes.discount,
            totalPaid: attributes.totalPaid
        },{
            where:{id}
        })
        return updatePrices
    },
    calculateTotalPrice: async (id:number)=>{
        const findById = await Purchases.findByPk(id)
        //if (!findById) return "Venda não encontrada"
        const totalPaid = findById!.productsTotal + findById!.shippingTotal - findById!.totalDiscount
        
        const [affectedRows, updatePurchase] = await Purchases.update({
            totalPaid: totalPaid
        },{
            where:{
                id
            },
            returning:true
        })
        return updatePurchase[0]
    }
}
