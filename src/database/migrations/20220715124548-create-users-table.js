'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
      },
      email:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      name:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      nickname:{
        type: Sequelize.DataTypes.STRING
      },
      cpf:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false,
        unique: true
      },
      phone:{
        type: Sequelize.DataTypes.STRING
      },
      celphone:{
        type: Sequelize.DataTypes.STRING
      },
      admin:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      },
      created_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }
     })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
