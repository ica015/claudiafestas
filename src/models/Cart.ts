import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"
import { CartItemsInstance } from "./CartItems"
import { ProductInstance } from "./Product"

export interface CartAttributes{
    id: number
    userId: number,
    addressId:number
    status: 'aberto' | 'fechado'
}

export interface CartCreationAttributes extends Optional<CartAttributes, 'id' |'addressId'| 'status'>{
}
export interface CartInstance extends Model<CartAttributes, CartCreationAttributes>,CartAttributes{
    products?:ProductInstance[]
    cartitems?:CartItemsInstance[]
}

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
    addressId:{
        type:DataTypes.INTEGER,
        references:{model:"addresses", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    status:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: 'aberto'
    }
})