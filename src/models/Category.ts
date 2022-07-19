import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface CategoryAttributes{
    id: number
    name:string
    active:boolean
}

export interface CategoryCreationAttribute extends Optional<CategoryAttributes, 'id'>{}
export interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttribute>,CategoryAttributes{}
export const Category = database.define<CategoryInstance, CategoryAttributes>('categories', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    active:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})