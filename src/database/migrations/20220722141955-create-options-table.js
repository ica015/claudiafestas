'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('options', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      product_id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        references:{model:"products", key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      description:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      old_price:{
        type:Sequelize.DataTypes.REAL
      },
      new_price:{
        type: Sequelize.DataTypes.REAL,
        allowNull: false
      },
      min_quantity:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
      },
      inventory_quantity:{
        type:Sequelize.DataTypes.INTEGER,
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
    await queryInterface.dropTable('options');
  }
};
