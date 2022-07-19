import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
    navigation: 'Manutenção de Usuários',
    editProperties: ['name', 'email', 'password', 'nickname', 'cpf', 'phone', 'celphone', 'admin'],
    filterProperties: ['name', 'email', 'nickname', 'cpf', 'phone', 'celphone','admin', 'createdAt', 'updatedAt'],
    listProperties: ['name', 'email', 'nickname', 'cpf', 'admin'],
    showProperties: ['id', 'name', 'email', 'nickname', 'cpf', 'phone', 'celphone', 'createdAt', 'updatedAt']
}