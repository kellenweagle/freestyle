// 'use strict';

// const {ProductImage, Sequelize} = require('../models');
// const bcrypt = require('bcryptjs');


// let options = {};
// options.tableName = 'ProductImages';

// if(process.env.NODE_ENV === 'production'){
//   options.schema = process.env.SCHEMA;
// }

// module.exports = {


//     up: async (queryInterface, Sequelize) => {
//       options.tableName = "ProductImages";
//       return queryInterface.bulkInsert(options, [
//         {
//           productId: 1,
//           url: 'https://media-photos.depop.com/b1/1683376/2034199385_b74702423fe2415f902c5401d993f2c6/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 2,
//           url: 'https://media-photos.depop.com/b1/1683376/2250891815_0cef57191d064002b5157911c42141e2/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 3,
//           url: 'https://media-photos.depop.com/b1/1683376/2250751472_abee00bd2683487c89361a8833b15025/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 4,
//           url: 'https://media-photos.depop.com/b1/38713656/2073155812_0b3beeb414074449b6910cdd8d65e564/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 5,
//           url: 'https://media-photos.depop.com/b1/38713656/2067124053_1cd282de4af04d77a2f586d4700dda44/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 6,
//           url: 'https://media-photos.depop.com/b1/38713656/2065661639_baa068c2bcf148abbd68f2258e6aff8d/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 7,
//           url: 'https://media-photos.depop.com/b1/14615025/2250872430_bb1e5871c49a436a959d31e502dfd453/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 8,
//           url: 'https://media-photos.depop.com/b1/14615025/1693748691_f9efdcec6bec4308a6cc6621f42b62b4/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 9,
//           url: 'https://media-photos.depop.com/b1/14615025/1634687463_38b3f1b025e64acf965d2c18744c5eeb/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 10,
//           url: 'https://media-photos.depop.com/b0/13086997/1019675591_206846de84324bc98ab02a51f83ba839/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 11,
//           url: 'https://media-photos.depop.com/b0/13086997/1019662562_fc71ed61112b414d8db3405206f7f641/P0.jpg',
//           previewImg: true
//         },
//         {
//           productId: 12,
//           url: 'https://media-photos.depop.com/b0/13086997/1019661840_3b7eaf4b7b564c4bb54616c25daea78b/P0.jpg',
//           previewImg: true
//         },
//       ], {})
//     },



//     down: async (queryInterface, Sequelize) => {
//       options.tableName = "ProductImages";
//       const Op = Sequelize.Op;
//       return queryInterface.bulkDelete(options, {})
//     }
//   }

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [
      {
        productId: 1,  // Assuming product ID 1 is "Men's Red Jacket"
        url: 'https://example.com/preview-image.jpg',
        previewImg: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,  // For "Men's Red Jacket"
        url: 'https://example.com/front-view.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,  // For "Men's Red Jacket"
        url: 'https://example.com/back-view.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,  // For "Men's Red Jacket"
        url: 'https://example.com/detail-view.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,  // Assuming product ID 2 is "Women's Blue Denim Jeans"
        url: 'https://example.com/preview-image2.jpg',
        previewImg: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,  // For "Women's Blue Denim Jeans"
        url: 'https://example.com/front-view2.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,  // For "Women's Blue Denim Jeans"
        url: 'https://example.com/back-view2.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,  // For "Women's Blue Denim Jeans"
        url: 'https://example.com/detail-view2.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};