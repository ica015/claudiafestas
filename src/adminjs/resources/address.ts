import { ResourceOptions } from "adminjs";

export const AddressResourcesOptions:ResourceOptions = {
    navigation: 'Atualização de Usuários',
    editProperties: ['usersId','mainAddress','postalCode','address','number','complement','neighborhood','city','state', 'additionalInformation','contactName','contactPhone'],
    filterProperties: ['usersId','contactName','postalCode', 'address','city','state', 'createdAt','updatedAt'],
    listProperties: ['usersId','contactName','address','city','state'],
    showProperties: ['usersId','contactName','address','number','postalCode','city','state','createdAt','updatedAt']
}