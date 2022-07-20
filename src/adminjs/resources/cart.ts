import { ResourceOptions } from "adminjs";

export const CartResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Compras',
    editProperties: ['userId', 'productId', 'quantity','variation'],
    filterProperties: ['userId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'userId','createdAt','uodatedAt'],
    showProperties:['id', 'userIs', 'productId', 'quantity', 'variation', 'createdAt','updatedAt']
}