import { ResourceOptions } from "adminjs";

export const AddressResourcesOptions:ResourceOptions = {
    navigation: 'Manutenção de Usuários',
    editProperties: ['userId','mainAddress','postalCode','address','number','complement','neighborhood','city','state', 'additionalInformation','contactName','contactPhone'],
    filterProperties: ['userId','contactName','postalCode', 'address','city','state', 'createdAt','updatedAt'],
    listProperties: ['userId','contactName','address','city','state'],
    showProperties: ['id', 'userId','contactName','address','number','postalCode','city','state','createdAt','updatedAt']
}