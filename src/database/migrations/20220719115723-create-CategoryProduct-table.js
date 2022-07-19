'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categoriesProducts', { 
      id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      categories_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {model:'categories', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      products_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {model:'products', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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
    await queryInterface.dropTable('categoriesProducts');
    
  }
};
