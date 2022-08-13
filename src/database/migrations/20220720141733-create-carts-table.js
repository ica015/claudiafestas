'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carts', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
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
      address_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'address', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: "CASCADE"
      },
      status:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('carts');

  }
};
