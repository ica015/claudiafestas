import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface AskAttributes{
    id: number
    userId: number
    productId:number
    question: Text
    response: Text
    needAnswer: boolean
}

export interface AskCreationAttributes extends Optional<AskAttributes, 'id' | 'response'>{}
export interface AskInstance extends Model<AskAttributes, AskCreationAttributes>, AskAttributes{}

export const Ask = database.define<AskInstance, AskAttributes>('Asks',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCAE"
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{model:'products', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    question:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    response:{
        type:DataTypes.TEXT
    },
    needAnswer:{
    type: DataTypes.BOOLEAN,
    defaultValue: true
    }
}
// ,{
//     hooks:{
//         beforeSave: async (ask) => {
//             if(ask.response.textContent){
//                 ask.needAnswer = false           
//                 }
//             }
//         }
//     }
    )