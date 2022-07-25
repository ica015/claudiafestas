import { ResourceOptions } from "adminjs";

export const CategoryResourceOptions: ResourceOptions = {
    navigation: 'Manutenção de Produtos',
    editProperties: ['name', 'active'],
    filterProperties: ['name', 'active'],
    listProperties: ['id','name', 'active','createdAt','updatedAt'],
    showProperties: ['id','name', 'active','createdAt','updatedAt'],
}