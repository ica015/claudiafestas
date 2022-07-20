import { ResourceOptions } from "adminjs";

export const CartResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Vendas',
    editProperties: ['userId'],
    filterProperties: ['id', 'userId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'userId','createdAt','updatedAt'],
    showProperties:['id', 'userId', 'createdAt','updatedAt']
}