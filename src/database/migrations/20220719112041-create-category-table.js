'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
      },
      name:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      active:{
        type:Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      },
      created_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
    
  }
};
