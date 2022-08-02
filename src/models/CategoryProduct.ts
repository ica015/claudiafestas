import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"
import { ProductInstance } from "./Product"

export interface CategoryProductAttributes{
    categoryId:number
    productId:number
}

export interface CategoryProductInstance extends Model<CategoryProductAttributes>,CategoryProductAttributes{
    product?: ProductInstance
}
export const CategoryProduct = database.define<CategoryProductInstance, CategoryProductAttributes>('catproducts', {
    categoryId:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        references:{model:"categories", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
    },
    productId:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        references:{model:"products", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
    }
})