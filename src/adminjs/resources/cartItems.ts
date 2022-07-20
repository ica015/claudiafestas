import { ResourceOptions } from "adminjs";

export const CartItemsResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Vendas',
    editProperties: ['cartId','productId','quantity','variation'],
    filterProperties: ['id', 'cartId','proutctId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'cartId','proutctId','quantity','variation','createdAt','updatedAt'],
    showProperties:['id', 'cartd','proutctId','quantity','variation', 'createdAt','updatedAt']
}