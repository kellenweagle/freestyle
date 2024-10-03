'use strict';

const {Products, Sequelize} = require('../models');

let options = {};
options.tableName = 'Product';

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
}

module.exports = {


    up: async (queryInterface, Sequelize) => {
      options.tableName = "Product";
      return queryInterface.bulkInsert(options, [
        {
          sellerId: 1,
          productName: 'Demo Product',
          desc: 'This is a test',
          category: 'Pant',
          price: 20.00
        }
        // {
        //   firstName: 'Demo',
        //   lastName: 'User',
        //   email: 'demo@user.io',
        //   username: 'Demo-lition',
        //   hashedPassword: bcrypt.hashSync('password'),
        //   profileImg: ''
        // },
        // {
        //   firstName: 'Fake',
        //   lastName: 'User',
        //   email: 'user1@user.io',
        //   username: 'FakeUser1',
        //   hashedPassword: bcrypt.hashSync('password2'),
        //   profileImg: ''
        // },
        // {
        //   firstName: 'Fake',
        //   lastName: 'User',
        //   email: 'user2@user.io',
        //   username: 'FakeUser2',
        //   hashedPassword: bcrypt.hashSync('password3'),
        //   profileImg: ''
        // },
        // {
        //   firstName: 'Kellen',
        //   lastName: 'Weagle',
        //   email: 'kellen@user.io',
        //   username: 'kellenweagle',
        //   hashedPassword: bcrypt.hashSync('password1'),
        //   profileImg: ''
        // },
      ], {})
      // return queryInterface.bulkInsert(options, [
      //   {}
        // {
        //   sellerId: 1,
        //   productName: 'Golf Wang Men\'s Navy and Black Hoodie',
        //   desc: 'Tyler The Creator Golf Wang Hoodie',
        //   category: 'Jacket',
        //   price: 65.00
        // },
        // {
        //   sellerId: 1,
        //   productName: 'Golf Wang Men\'s Navy and Black Hoodie',
        //   desc: 'Tyler The Creator Golf Wang Hoodie',
        //   category: 'Jacket',
        //   price: 65.00
        // },
        // {
        //   sellerId: 1,
        //   productName: 'Golf Wang Men\'s Navy and Black Hoodie',
        //   desc: 'Tyler The Creator Golf Wang Hoodie',
        //   category: 'Jacket',
        //   price: 65.00
        // },
        // {
        //   sellerId: 1,
        //   productName: 'Golf Wang Men\'s Navy and Black Hoodie',
        //   desc: 'Tyler The Creator Golf Wang Hoodie',
        //   category: 'Jacket',
        //   price: 65.00
        // },
        // {
        //   sellerId: 1,
        //   productName: 'Golf Wang Men\'s Navy and Black Hoodie',
        //   desc: 'Tyler The Creator Golf Wang Hoodie',
        //   category: 'Jacket',
        //   price: 65.00
        // },
        // {
        //   sellerId: 1,
        //   productName: 'Golf Wang Men\'s Navy and Black Hoodie',
        //   desc: 'Tyler The Creator Golf Wang Hoodie',
        //   category: 'Jacket',
        //   price: 65.00
        // },
        // {
        //   sellerId: 1,
        //   productName: 'Golf Wang Men\'s Navy and Black Hoodie',
        //   desc: 'Tyler The Creator Golf Wang Hoodie',
        //   category: 'Jacket',
        //   price: 65.00
        // },
      // ], {})
    },



    down: async (queryInterface, Sequelize) => {
      options.tableName = "Products";
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {
        username: {[Op.in]: []}
      })
    }
  }
