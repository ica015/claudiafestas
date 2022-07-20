import { ResourceOptions } from "adminjs";

export const CartItemsResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Vendas',
    editProperties: ['cartId','productId','quantity','variation'],
    filterProperties: ['id', 'cartId','productId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'cartId','productId','quantity','variation','createdAt','updatedAt'],
    showProperties:['id', 'cartId','productId','quantity','variation', 'createdAt','updatedAt']
}