import { ResourceOptions } from "adminjs";

export const VisitResourceOptions:ResourceOptions = {
    navigation: 'Manutenção de Vendas',
    properties:{
        userId:{
            isDisabled: true
        },
        productId:{
            isDisabled: true
        },
        createdAt:{
            isDisabled: true
        },
        updatedAt:{
            isDisabled: true
        }
    },
    editProperties:['userId', 'productId', 'createdAt', 'updatedAt'],
    listProperties:['userId', 'productId', 'createdAt', 'updatedAt'],
    filterProperties:['userId', 'productId', 'createdAt', 'updatedAt'],
    showProperties:['id','userId', 'productId', 'createdAt', 'updatedAt']
} 