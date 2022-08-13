import { ResourceOptions } from "adminjs";

export const catProductsResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Produtos',
    editProperties: ['productId','categoryId'],
    filterProperties: ['productId','categoryId', 'createdAt', 'updatedAt'],
    listProperties: ['productId','categoryId'],
    showProperties:['productId','categoryId', 'createdAt','updatedAt']
}