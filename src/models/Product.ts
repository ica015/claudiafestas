import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface ProductAttributes{
    id: number
    nome: string
    imagemUrl: string
    destaque: boolean
    descricao: Text
    ativo:boolean
    precoAntigo:number
    precoNovo:number
    qtdeMinima:number
    qtdeEstoque:number
    variacao:string
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'imagemUrl' | 'precoAntigo' | 'variacao'>{}

export interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes{}

export const Product = database.define<ProductInstance, ProductAttributes>('produtos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imagemUrl:{
        type:DataTypes.STRING
    },
    destaque:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    ativo:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    },
    qtdeMinima:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    qtdeEstoque:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    precoAntigo:{
        type:DataTypes.REAL
    },
    precoNovo:{
        type: DataTypes.REAL,
        allowNull:false
    },
    variacao:{
        type: DataTypes.STRING
    }
})