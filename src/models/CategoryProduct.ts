import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"
import { ProductInstance } from "./Product"

export interface CategoryProductAttributes{
    id: number
    categoryId:number
    productId:number
}

export interface CategoryProductCreationAttribute extends Optional<CategoryProductAttributes, 'id'>{}
export interface CategoryProductInstance extends Model<CategoryProductAttributes, CategoryProductCreationAttribute>,CategoryProductAttributes{
    product?: ProductInstance
}
export const CategoryProduct = database.define<CategoryProductInstance, CategoryProductAttributes>('catproducts', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
        allowNull:false,
        references:{model:"products", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
    }
})