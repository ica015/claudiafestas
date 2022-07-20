import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface VisitAttributes{
    id:number
    userId:number
    productId:number
}

export interface VisitCreationAttributes extends Optional<VisitAttributes, 'id'>{}
export interface VisitInstance extends Model<VisitAttributes, VisitCreationAttributes>, VisitAttributes{}

export const Visit = database.define<VisitInstance, VisitAttributes>('visits',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{model:'products', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    }
})