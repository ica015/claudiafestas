import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface VisitAttributes{
    userId:number
    productId:number
}

export interface VisitInstance extends Model<VisitAttributes>, VisitAttributes{}

export const Visit = database.define<VisitInstance, VisitAttributes>('visits',{
    userId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    productId:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{model:'products', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    }
})