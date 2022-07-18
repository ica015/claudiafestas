'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      imagem_url:{
        type:Sequelize.DataTypes.STRING
      },
      destaque:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
      },
      descricao:{
        type:Sequelize.DataTypes.TEXT,
        allowNull:false
      },
      ativo:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      },
      preco_antigo:{
        type:Sequelize.DataTypes.REAL
      },
      preco_novo:{
        type: Sequelize.DataTypes.REAL,
        allowNull: false
      },
      qtde_minima:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
      },
      qtde_estoque:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
      },
      variacao:{
        type:Sequelize.DataTypes.STRING
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
    await queryInterface.dropTable('produtos');
  }
};
