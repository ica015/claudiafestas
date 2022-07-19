import { ResourceOptions } from "adminjs";

export const CategoryResourceOptions: ResourceOptions = {
    navigation: 'Manutenção de Produtos',
    editProperties: ['name', 'active'],
    filterProperties: ['name', 'active'],
    listProperties: ['name', 'active','createdAt','updatedAt'],
    showProperties: ['name', 'active','createdAt','updatedAt'],
}