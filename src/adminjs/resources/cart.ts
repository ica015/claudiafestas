import { ResourceOptions } from "adminjs";

export const CartResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Vendas',
    editProperties: ['userId', 'status'],
    filterProperties: ['id', 'userId', 'status', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'userId', 'status','createdAt','updatedAt'],
    showProperties:['id', 'userId', 'status', 'createdAt','updatedAt']
}