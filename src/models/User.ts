import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface UserAttributes{
    id: number
    email:string
    password: string
    name: string
    nickname: string
    cpf: string
    phone:string
    celphone:string
    admin: boolean
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'nickname' | 'phone' | 'celphone' | 'admin'>{}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{}

export const User = database.define<UserInstance, UserAttributes>('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail:{
                msg:'Entre com um e-mail válido'
            },
            notEmpty:{
                msg:'O campo de e-mail não pode ser vazio!'
            },
            notNull:{
                msg:'O campo de e-mail não pode ser nulo!'
            }
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname:{
        type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone:{
        type: DataTypes.STRING
    },
    celphone:{
        type: DataTypes.STRING,
    },
    admin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})