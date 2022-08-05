import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface AddressAttributes {
    id: number
    userId:number
    mainAddress:boolean
    contactName:string
    contactPhone:string
    address:string
    number:number
    complement:string
    neighborhood:string
    city:string
    state:string
    postalCode:string
    additionalInformation:string
}

export interface AddressCreationAttributes extends Optional<AddressAttributes, 'id' | 'mainAddress' | 'contactName' | 'contactPhone'| 'complement' | 'additionalInformation'>{}

export interface AddressInstance extends Model<AddressAttributes, AddressCreationAttributes>, AddressAttributes{}

export const Address = database.define<AddressInstance, AddressAttributes>('addresses',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    mainAddress:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    contactName:{
        type: DataTypes.STRING
    },
    contactPhone:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING,
        allowNull: false
    },
    number:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    complement:{
        type:DataTypes.STRING
    },
    neighborhood:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull: false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postalCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    additionalInformation:{
        type:DataTypes.STRING
    }
})