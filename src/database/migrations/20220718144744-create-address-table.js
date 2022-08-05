'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      user_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model: 'users', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      main_address:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      },
      contact_name: {
        type:Sequelize.DataTypes.STRING,
      },
      contact_phone:{
        type:Sequelize.DataTypes.STRING
      },
      address:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      number:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      complement:{
        type: Sequelize.DataTypes.STRING
      },
      neighborhood:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      city:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      state:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      postal_code:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      additional_information:{
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
    await queryInterface.dropTable('addresses');
  }
};