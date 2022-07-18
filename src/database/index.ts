import { Sequelize } from "sequelize";

export const database = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'claudiafestas',
    username: 'carlos',
    password: '123456',
    define:{
        underscored: true
    }
})