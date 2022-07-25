import { ResourceOptions } from "adminjs";


export const OptionstResourcesOptions: ResourceOptions = {
    navigation: "Manutenção de Produtos",
    properties:{
        oldPrice:{
            type:"float"
        }
        
    },
    editProperties: ['productId', 'description','oldPrice', 'newPrice','minQuantity', 'inventoryQuantity', 'active'],
    listProperties: ['productId', 'description', 'newPrice','minQuantity', 'inventoryQuantity', 'active'],
    filterProperties: ['name', 'description', 'active'],
    showProperties: ['id', 'productId', 'description','oldPrice', 'newPrice','minQuantity', 'inventoryQuantity', 'active']
}