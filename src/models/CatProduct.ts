import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface CatProductAttributes{
    id: number
    categoryId: number
    productId: number
}

export interface CatProductCreationAttributes extends Optional<CatProductAttributes, 'id'>{}
export interface CatProductInstance extends Model<CatProductAttributes, CatProductCreationAttributes>,CatProductAttributes{}

export const CatProduct = database.define<CatProductInstance, CatProductAttributes>('catproducts',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoryId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{model:"categories", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{model:'products', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
    }
})