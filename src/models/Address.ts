import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface AddressAttributes {
    id: number
    idUsuario:number
    principal:boolean
    nomeContato:string
    telContato:string
    logradouro:string
    numero:number
    complemento:string
    bairro:string
    cidade:string
    estado:string
    cep:string
    infoAdicional:string
}

export interface AddressCreationAttributes extends Optional<AddressAttributes, 'principal' | 'nomeContato' | 'telContato'| 'complemento' | 'infoAdicional'>{}

export interface AddressInstance extends Model<AddressAttributes, AddressCreationAttributes>, AddressAttributes{}

export const Address = database.define<AddressInstance, AddressAttributes>('enderecos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idUsuario:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{model:'usuarios', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    principal:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    nomeContato:{
        type: DataTypes.STRING
    },
    telContato:{
        type:DataTypes.STRING
    },
    logradouro:{
        type:DataTypes.STRING,
        allowNull: false
    },
    numero:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    complemento:{
        type:DataTypes.STRING
    },
    bairro:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cidade:{
        type:DataTypes.STRING,
        allowNull: false
    },
    estado:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cep:{
        type:DataTypes.STRING,
        allowNull:false
    },
    infoAdicional:{
        type:DataTypes.STRING
    }
})