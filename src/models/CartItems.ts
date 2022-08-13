import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"
import { ProductInstance } from "./Product"

export interface CartItemsAttributes{
    id: number
    cartId: number
    productId: number
    quantity: number
    optionId: number
}

export interface CartItemsCreationAttributes extends Optional<CartItemsAttributes, 'id'>{}
export interface CartItemsInstance extends Model<CartItemsAttributes, CartItemsCreationAttributes>,CartItemsAttributes{
    product?:ProductInstance[]
}

export const CartItems = database.define<CartItemsInstance, CartItemsAttributes>('cart_items',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cartId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{model:"carts", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{model:'products', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    optionId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{model:'options', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    }
})