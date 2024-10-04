'use strict';

let options = [];
options.tableName = 'ProductImages';
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

// 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Products'},
        onDelete: 'CASCADE'
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: ''
      },
      previewImg: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(options);
  }
};