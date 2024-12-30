'use strict';

const {Review, Sequelize} = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'Reviews';

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
}

module.exports = {


    up: async (queryInterface, Sequelize) => {
      options.tableName = "Reviews";
      return queryInterface.bulkInsert(options, [
        {
          userId: 2,
          review: 'Loved the sweater I got!',
          stars: 5,
        },
        {
          userId: 3,
          review: 'Item exactly as described! and super fast shipping',
          stars: 5,
        },
        {
          userId: 4,
          review: 'The shipping was fast and item is great',
          stars: 4,
        },
        {
          userId: 2,
          review: 'great experience',
          stars: 3,
        },
        {
          userId: 2,
          review: 'Love it! Thanks!',
          stars: 4,
        },
        {
          userId: 2,
          review: 'shipped so quickly and is in perfect condition! thank u!',
          stars: 5,
        },
        {
          userId: 3,
          review: 'Item was just as listed, thanks!',
          stars: 4,
        },
        {
          userId: 3,
          review: 'Great prices, great communication from the store and fast shipping! I would highly recommend them.',
          stars: 5,
        },
        {
          userId: 3,
          review: 'Very quick shipping, thanks!',
          stars: 4,
        },
        {
          userId: 4,
          review: 'thank you!',
          stars: 4,
        },
        {
          userId: 4,
          review: 'Amazing! Item got here in 3 days after ordering. Almost faster than Amazon, haha!',
          stars: 5,
        },
      ], {})
    },



    down: async (queryInterface, Sequelize) => {
      options.tableName = "Reviews";
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {})
    }
  }
