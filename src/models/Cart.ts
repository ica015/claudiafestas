import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface CartAttributes{
    id: number
    userId: number,
    status: 'aberto' | 'fechado'
}

export interface CartCreationAttributes extends Optional<CartAttributes, 'id' | 'status'>{}
export interface CartInstance extends Model<CartAttributes, CartCreationAttributes>,CartAttributes{}

export const Cart = database.define<CartInstance, CartAttributes>('carts',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{model:"users", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    status:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: 'aberto'
    }
})