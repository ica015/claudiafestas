import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
    navigation: 'Manutenção de Usuários',
    properties: {
        password:{
            type:'password'
        },
        birth:{
            type:'date'
        },
        admin:{
            custom:{
                default:true
            }
        },
        phone:{
            type:'phone'
        },
        celphone:{
            type:'phone'
        }
    },
    editProperties: ['name', 'email', 'password', 'nickname', 'cpf', 'birth', 'phone', 'celphone', 'admin'],
    filterProperties: ['name', 'email', 'nickname', 'cpf', 'birth', 'phone', 'celphone','admin', 'createdAt', 'updatedAt'],
    listProperties: ['name', 'email', 'nickname', 'cpf', 'admin'],
    showProperties: ['id', 'name', 'email', 'nickname', 'cpf', 'birth', 'phone', 'celphone', 'createdAt', 'updatedAt']
}