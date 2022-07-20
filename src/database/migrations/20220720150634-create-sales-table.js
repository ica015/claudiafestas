'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', { 
      id: {
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: "CASCADE"
      },
      cart_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'carts', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: "CASCADE"
      },
      
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
