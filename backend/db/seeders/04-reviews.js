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
          userId: 1,
          review: 'Loved the sweater I got!',
          stars: 5,
        },
        {
          userId: 1,
          review: 'Item exactly as described! and super fast shipping',
          stars: 5,
        },
        {
          userId: 1,
          review: 'The shipping was fast and seller is great',
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
          review: 'Seller never shipped & never answered messages after I bought an item. Had to reach out to depop to get a refund.',
          stars: 1,
        },
        {
          userId: 3,
          review: 'Great prices, great communication from the seller and fast shipping! I would highly recommend this seller.',
          stars: 5,
        },
        {
          userId: 3,
          review: 'Very quick shipping and nice seller, thanks!',
          stars: 4,
        },
        {
          userId: 4,
          review: 'thank you!',
          stars: 4,
        },
        {
          userId: 4,
          review: 'Amazing seller. Item got here in 3 days after ordering. Almost faster than Amazon, haha!',
          stars: 5,
        },
        {
          userId: 4,
          review: 'He did communicate with me but it took so long to ship that I had to cancel the order because I was going to be out of town and he never refunded me.',
          stars: 2,
        },
      ], {})
    },



    down: async (queryInterface, Sequelize) => {
      options.tableName = "Reviews";
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {})
    }
  }
