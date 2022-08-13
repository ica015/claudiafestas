'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('purchaseitems', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, 
      purchase_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'purchases', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: "CASCADE"
      },
      product_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:"products", key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      product_name:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      },
      variation:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      },
      quantity:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      },
      price:{
        type: Sequelize.DataTypes.REAL,
        allowNull:false
      },
      discount:{
        type: Sequelize.DataTypes.REAL,
        allowNull:false
      },
      total_price:{
        type: Sequelize.DataTypes.REAL,
        allowNull:false
      },
      shipping_cost:{
        type: Sequelize.DataTypes.REAL,
        allowNull:false
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
    await queryInterface.dropTable('purchaseitems');

  }
};
