import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface UserAttributes{
    id: number
    email:string
    senha: string
    nome: string
    apelido: string
    cpf: string
    telefone:string
    celular:string
    admin: boolean
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'apelido' | 'telefone' | 'celular' | 'admin'>{}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{}

export const User = database.define<UserInstance, UserAttributes>('usuarios',{
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
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apelido:{
        type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone:{
        type: DataTypes.STRING
    },
    celular:{
        type: DataTypes.STRING,
    },
    admin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})