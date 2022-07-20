import { ResourceOptions } from "adminjs";

export const AskResourceOptions:ResourceOptions = {
    navigation: "Manutenção de Produtos",
    properties:{
        question:{
            type:'textarea',
            // isDisabled:true
        },
        response:{
            type:'richtext'
        },
        userId:{
            // isDisabled: true
        },
        productId:{
            // isDisabled: true
        }
    },
    filterProperties:['userId', 'productId','question', 'needAnswer','createdAt','updatedAt'],
    listProperties:['id','userId', 'productId', 'needAnswer','createdAt'],
    showProperties:['userId', 'productId','question','response', 'needAnswer','createdAt','updatedAt'],
    editProperties:['userId', 'productId','question', 'response', 'needAnswer']
}