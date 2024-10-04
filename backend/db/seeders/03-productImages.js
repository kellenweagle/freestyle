'use strict';

const {ProductImage, Sequelize} = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'ProductImages';

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
}

module.exports = {


    up: async (queryInterface, Sequelize) => {
      options.tableName = "ProductImages";
      return queryInterface.bulkInsert(options, [
        {
          productId: 1,
          url: 'https://media-photos.depop.com/b1/43131288/2055295605_a680ccaa2e2344649fda98eed236ea93/P0.jpg',
          previewImg: true
        },
        {
          productId: 1,
          url: 'https://media-photos.depop.com/b1/43131288/2055295605_a680ccaa2e2344649fda98eed236ea93/P0.jpg',
          previewImg: false
        }
      ], {})
    },



    down: async (queryInterface, Sequelize) => {
      options.tableName = "ProductImages";
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {})
    }
  }