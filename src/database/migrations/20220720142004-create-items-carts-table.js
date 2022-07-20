'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cart_items', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, 
      cart_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'carts', key:'id'},
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
      quantity:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull:false
      },
      variation:{
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
    await queryInterface.dropTable('cart_items');

  }
};
