import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface OptionsAttributes{
    id: number
    productId: number
    description: Text
    oldPrice:number
    newPrice:number
    minQuantity:number
    inventoryQuantity:number
    active:boolean
}

export interface OptionsCreationAttributes extends Optional<OptionsAttributes, 'id'| 'oldPrice' | 'minQuantity'>{}

export interface OptionsInstance extends Model<OptionsAttributes, OptionsCreationAttributes>, OptionsAttributes{}

export const Options = database.define<OptionsInstance, OptionsAttributes>('options', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{model:"products", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    minQuantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    inventoryQuantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    oldPrice:{
        type:DataTypes.REAL
    },
    newPrice:{
        type: DataTypes.REAL,
        allowNull:false
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    }
})