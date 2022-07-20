import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface CartAttributes{
    id: number
    userId: number
    productId: number
    quantity: number
    variation: string
}

export interface CartCreationAttributes extends Optional<CartAttributes, 'id'| 'variation'>{}
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