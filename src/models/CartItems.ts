import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface CartItemsAttributes{
    id: number
    cartId: number
    productId: number
    quantity: number
    variation: string
}

export interface CartItemsCreationAttributes extends Optional<CartItemsAttributes, 'id'| 'variation'>{}
export interface CartItemsInstance extends Model<CartItemsAttributes, CartItemsCreationAttributes>,CartItemsAttributes{}

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
    variation:{
        type: DataTypes.STRING
    }
})