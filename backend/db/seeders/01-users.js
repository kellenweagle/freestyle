'use strict';

const {User, Sequelize} = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'Users';

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
}

module.exports = {


    up: async (queryInterface, Sequelize) => {
      options.tableName = "Users";
      return queryInterface.bulkInsert(options, [
        {
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo@user.io',
          username: 'Demo-lition',
          hashedPassword: bcrypt.hashSync('password'),
          profileImg: ''
        },
        {
          firstName: 'Fake',
          lastName: 'User',
          email: 'user1@user.io',
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync('password2'),
          profileImg: ''
        },
        {
          firstName: 'Fake',
          lastName: 'User',
          email: 'user2@user.io',
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync('password3'),
          profileImg: ''
        },
        {
          firstName: 'Kellen',
          lastName: 'Weagle',
          email: 'kellen@user.io',
          username: 'kellenweagle',
          hashedPassword: bcrypt.hashSync('password1'),
          profileImg: ''
        },
      ], {})
    },



    down: async (queryInterface, Sequelize) => {
      options.tableName = "Users";
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {
        username: {[Op.in]: []}
      })
    }
  }
