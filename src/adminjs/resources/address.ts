import { ResourceOptions } from "adminjs";

export const AddressResourcesOptions:ResourceOptions = {
    navigation: 'Atualização de Usuários',
    editProperties: ['idUsuario','principal','cep','logradouro','numero','complemento','bairro','cidade','estado', 'infoAdicional','nomeContato','telContato'],
    filterProperties: ['idUsuario','nomeContato','cep', 'logradouro','cidade','estado', 'createdAt','updatedAt'],
    listProperties: ['idUsuario','nomeContato','logradouro','cidade','estado'],
    showProperties: ['idUsuario','nomeContato','logradouro','numero','cep','cidade','estado','createdAt','updatedAt']
}