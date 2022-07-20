import { ResourceOptions } from "adminjs";

export const catProductsResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Produtos',
    editProperties: ['productId','categoryId'],
    filterProperties: ['id', 'productId','categoryId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'productId','categoryId','createdAt','updatedAt'],
    showProperties:['id', 'productId','categoryId', 'createdAt','updatedAt']
}