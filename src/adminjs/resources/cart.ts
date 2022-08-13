import { ResourceOptions } from "adminjs";

export const CartResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Vendas',
    editProperties: ['userId', 'status', 'addressId'],
    filterProperties: ['id', 'userId', 'addressId', 'status', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'userId', 'addressId', 'status','createdAt','updatedAt'],
    showProperties:['id', 'userId', 'addressId', 'status', 'createdAt','updatedAt']
}