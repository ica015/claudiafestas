'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('asks', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      product_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {model:'products', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      question:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      },
      response:{
        type: Sequelize.DataTypes.STRING,
      },
      need_answer:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      },
      created_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull:false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('asks');
    
  }
};
