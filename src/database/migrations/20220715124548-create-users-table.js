'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
      },
      email:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      nome:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      apelido:{
        type: Sequelize.DataTypes.STRING
      },
      cpf:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false,
        unique: true
      },
      telefone:{
        type: Sequelize.DataTypes.STRING
      },
      celular:{
        type: Sequelize.DataTypes.STRING
      },
      admin:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      },
      created_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }
     })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
