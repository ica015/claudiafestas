import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface PixAttributes{
    id: number
    pixkey: string
    main: boolean
}

export interface PixCreationAttributes extends Optional<PixAttributes, 'id'>{}

export interface PixInstance extends Model<PixAttributes, PixCreationAttributes>,PixAttributes{}

export const Pix = database.define<PixInstance, PixAttributes>('pix',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    pixkey:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            is:/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})|([a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?)/
        }
    },
    main:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
})