import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
    navigation: 'Atualização de Usuários',
    editProperties: ['nome', 'email', 'senha', 'apelido', 'cpf', 'telefone', 'celular', 'admin'],
    filterProperties: ['nome', 'email', 'apelido', 'cpf', 'telefone', 'celular','admin', 'createdAt', 'updatedAt'],
    listProperties: ['nome', 'email', 'apelido', 'cpf', 'admin'],
    showProperties: ['id', 'nome', 'email', 'apelido', 'cpf', 'telefone', 'celular', 'createdAt', 'updatedAt']
}