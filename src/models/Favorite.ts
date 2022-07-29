import { DataTypes, Model } from "sequelize"
import { database } from "../database"
import { ProductInstance } from "./Product"
import { UserInstance } from "./User"

export interface FavoriteAttributes{
    userId: number
    productId:number
}

export interface FavoriteInstance extends Model<FavoriteAttributes>, FavoriteAttributes{
    user?: UserInstance
    product?: ProductInstance
}

export const Favorite = database.define<FavoriteInstance, FavoriteAttributes>('favorites', {
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