import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database";
import bcrypt from 'bcrypt';

type checkPasswordCallBack = (err?: Error | undefined, isSame?:boolean) => void

export interface UserAttributes{
    id: number
    name: string
    email:string
    password: string
    nickname: string
    birth: Date
    cpf: string
    phone:string
    celphone:string
    admin: boolean
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'nickname' | 'birth' | 'phone' | 'celphone' | 'admin'>{}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{
    checkPassword: (password: string, callbackfn: checkPasswordCallBack) => void
}

export const User = database.define<UserInstance, UserAttributes>('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
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
    nickname:{
        type: DataTypes.STRING
    },
    birth:{
        type: DataTypes.DATE
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
},{
    hooks:{
        beforeSave: async (user) => {
            if(user.isNewRecord || user.changed('password')){
                user.password = await bcrypt.hash(user.password.toString(), 10)
            }
        }
    }
})

User.prototype.checkPassword = function(password:string, callbackfn: checkPasswordCallBack){
    bcrypt.compare(password, this.password, (err, isSame) =>{
        if (err){
            callbackfn(err)
        }else{
            callbackfn(err, isSame)
        }
    })
}