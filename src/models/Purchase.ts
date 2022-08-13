import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"
import { OptionsInstance } from "./Options"
import { ProductInstance } from "./Product"

export interface PurchasesAttributes{
    id: number
    userId:number
    cartId:number
    productsTotal:number
    shippingTotal:number
    shippingAddress:string
    paymentMethod: string
    totalDiscount: number
    status: 'Pendente' | 'Pago' | 'Cancelado'
    totalPaid: number
}

export interface PurchasesCreationAttributes extends Optional<PurchasesAttributes, 'id'|'productsTotal'| 'shippingTotal' |'paymentMethod'|'totalDiscount'|'status'|'totalPaid'> {}

export interface PurchasesInstance extends Model<PurchasesAttributes, PurchasesCreationAttributes>,PurchasesAttributes{
    products:ProductInstance[]
    options:OptionsInstance[]
}

export const Purchases = database.define<PurchasesInstance, PurchasesAttributes>('purchases',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    cartId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{model:'carts', key:'id'},
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
    },
    shippingAddress:{
        type: DataTypes.STRING,
    },
    productsTotal:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    shippingTotal:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    totalDiscount:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    totalPaid:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    paymentMethod:{
        type: DataTypes.STRING,
        
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: 'Pendente'
    }
})