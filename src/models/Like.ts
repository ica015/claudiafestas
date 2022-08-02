import { DataTypes, Model } from "sequelize"
import { database } from "../database"

export interface LikeAttributes{
    userId: number
    productId:number
}

export interface LikeInstance extends Model<LikeAttributes>,LikeAttributes{}

export const Like = database.define<LikeInstance, LikeAttributes>('like', {
    userId:{
        primaryKey:true,
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{model:'users', key:'id'},
        onUpdate: 'CASCADE',
        onDelete:"CASCADE"
    },
    productId:{
        primaryKey:true,
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{model:'products', key:'id'},
        onUpdate: 'CASCADE',
        onDelete:"CASCADE"
    }
})