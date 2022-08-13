import { PruchaseItemCreationAttributes, PurchaseItems } from "../models/PurchaseItem"


export const PurchaseItemsServices = {
    createPurchaseItems: async (attributes: PruchaseItemCreationAttributes) =>{
        const items = await PurchaseItems.create(attributes)
        return items
    }
}