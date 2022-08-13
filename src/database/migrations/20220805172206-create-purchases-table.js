'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('purchases', { 
      id: {
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      cart_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'carts', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      products_total:{
        type: Sequelize.DataTypes.REAL
      },
      shipping_total:{
        type: Sequelize.DataTypes.REAL
      },
      shipping_address:{
      type: Sequelize.DataTypes.STRING
      },
      payment_method:{
        type: Sequelize.DataTypes.STRING
      },
      total_discount:{
        type: Sequelize.DataTypes.REAL
      },
      status:{
        type: Sequelize.DataTypes.STRING
      },
      total_paid:{
        type: Sequelize.DataTypes.REAL
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
    await queryInterface.dropTable('purchases');
  }
};
