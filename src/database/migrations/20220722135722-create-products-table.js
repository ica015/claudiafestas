'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      image_url:{
        type:Sequelize.DataTypes.STRING
      },
      featured:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description:{
        type:Sequelize.DataTypes.TEXT,
        allowNull:false
      },
      active:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('products');
  }
};
