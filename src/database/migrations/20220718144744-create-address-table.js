'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_usuario:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model: 'usuarios', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      principal:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      },
      nome_contato: {
        type:Sequelize.DataTypes.STRING,
      },
      tel_contato:{
        type:Sequelize.DataTypes.STRING
      },
      logradouro:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      numero:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      complemento:{
        type: Sequelize.DataTypes.STRING
      },
      bairro:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      cidade:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      estado:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      cep:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      info_adicional:{
        type: Sequelize.DataTypes.STRING
      },
      created_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos');
  }
};