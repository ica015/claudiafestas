import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface PurchaseItemsAttributes{
    id: number
    purchaseId: number
    productId: number
    productName: string
    variation: string
    quantity: number
    price: number
    discount: number
    totalPrice: number
    shippingCost: number
}

export interface PruchaseItemCreationAttributes extends Optional<PurchaseItemsAttributes, 'id'>{}

export interface PurchaseItemsInstace extends Model<PurchaseItemsAttributes, PruchaseItemCreationAttributes>, PurchaseItemsAttributes{}

export const PurchaseItems = database.define<PurchaseItemsInstace, PurchaseItemsAttributes>('purchaseitems',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    purchaseId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{model:'purchases', key:'id'},
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{model:'products', key:'id'},
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
    },
    productName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    variation:{
        type: DataTypes.STRING,
        allowNull:false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    shippingCost:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    discount:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    totalPrice:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    }

})