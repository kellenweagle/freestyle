// 'use strict';

// const {Product, Sequelize} = require('../models');

// let options = {};
// options.tableName = 'Products';

// if(process.env.NODE_ENV === 'production'){
//   options.schema = process.env.SCHEMA;
// }

// module.exports = {


//     up: async (queryInterface, Sequelize) => {
//       options.tableName = "Products";
//       return queryInterface.bulkInsert(options, [
//         {
//           sellerId: 1,
//           productName: 'Women\'s Purple Blouse',
//           desc: 'Vintage sheer lavender purple scalloped collar blouse. Beautiful embroidered collar! Has pleats and buttons down the middle. Brand is Alicia. Marked a size 12 in women\'s. 100% polyester material.',
//           category: 'Shirt',
//           price: 20.00
//         },
//         {
//           sellerId: 1,
//           productName: 'Rampage Women\'s Dress',
//           desc: 'Rampage green tiger print body con dress. Marked a size 5 in women\'s. Lined and has a 6 inch high slit opening in the back. Zipper opening on back.',
//           category: 'Dress',
//           price: 50.00
//         },
//         {
//           sellerId: 1,
//           productName: 'Women\'s Jacket',
//           desc: 'Red bomber jacket. Has corduroy sleeves and that little clasp on the top of the collar like moto jackets. Pockets in the front and inner lining. Brand is SMACK and marked a size medium in men\'s but it\'s wayyyy smaller! It is more like a small in women\'s which is why I\'m listing it as that.',
//           category: 'Jacket',
//           price: 35.00
//         },
//         {
//           sellerId: 1,
//           productName: 'The Mountain Men\'s Blue and Grey T-shirt',
//           desc: 'The Mountain Big Cats Jungle Tee',
//           category: 'Shirt',
//           price: 12.00
//         },
//         {
//           sellerId: 2,
//           productName: 'American Vintage Women\'s Black and White Sweatshirt',
//           desc: 'San Francisco Crewneck Sweatshirt',
//           category: 'Jacket',
//           price: 15.00
//         },
//         {
//           sellerId: 1,
//           productName: 'SO Clothing Women\'s Blue and Navy Skirt',
//           desc: 'Y2K Low Rise Mini Skirt 11',
//           category: 'Skirt',
//           price: 15.00
//         },
//         {
//           sellerId: 1,
//           productName: 'The North Face Women\'s Green Jacket',
//           desc: 'Large green North Face fleece jacket',
//           category: 'Jacket',
//           price: 18.00
//         },
//         {
//           sellerId: 1,
//           productName: 'Old Navy Women\'s Blue and Navy Dress',
//           desc: 'Large Old Navy denim dress!',
//           category: 'Dress',
//           price: 15.00
//         },
//         {
//           sellerId: 3,
//           productName: 'White Stag Women\'s multi T-shirt',
//           desc: 'L White Stag Alaska Graphic T-shirt',
//           category: 'Shirt',
//           price: 10.00
//         },
//         {
//           sellerId: 1,
//           productName: 'White Stag Women\'s T-shirt',
//           desc: 'A staple tee that is 100% cotton and ribbed. You can not go wrong with this one, neutral cream colored and textured.',
//           category: 'Shirt',
//           price: 15.00
//         },
//         {
//           sellerId: 1,
//           productName: 'Women\'s Cream and Pink Vest',
//           desc: 'Pastel cream sleeveless knit / vest. Watercolor floral, paisley, and leopard design - because why choose? Looks cute with shirts or trousers, or even a collared shirt underneath.',
//           category: 'Shirt',
//           price: 20.00
//         },
//         {
//           sellerId: 1,
//           productName: 'Women\'s T-shirt',
//           desc: '100% cotton yellow tee. Potted plants with 🇺🇸 across. In love with this color and the graphic.',
//           category: 'Shirt',
//           price: 15.00
//         },
//       ], {})
//     },

//     down: async (queryInterface, Sequelize) => {
//       options.tableName = "Products";
//       const Op = Sequelize.Op;
//       return queryInterface.bulkDelete(options, {})
//     }
//   }

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        sellerId: 1,
        productName: 'Charter Club Women\'s Brown and Green Skirt',
        desc: 'Charter Club women\'s vintage 90s brown and green plaid wool wrap midi skirt, size 12.',
        category: 'Bottoms',
        price: 35.00,
        previewImage: 'https://media-photos.depop.com/b1/30825655/2361047634_07d5bfe673c94b2faa3224ced251201b/P0.jpg',
        image1: 'https://media-photos.depop.com/b1/30825655/2361047638_1b531e8dd8b546569b610621a0b4d2ed/P0.jpg',
        image2: 'https://media-photos.depop.com/b1/30825655/2361047641_5f0d0d7156534afbafecb21e0b7e34ad/P0.jpg',
        image3: 'https://media-photos.depop.com/b1/30825655/2361047646_0304df1ed03a48c1bd898482078e2f7d/P0.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sellerId: 1,
        productName: 'Rose Women\'s Blue and White Jumper',
        desc: 'Rose women\'s vintage 80s fair isle and heart knit pullover sweater, size L.',
        category: 'Tops',
        price: 48.00,
        previewImage: 'https://media-photos.depop.com/b1/30825655/2040241180_71b606a1a8aa475095a767959313d304/P0.jpg',
        image1: 'https://media-photos.depop.com/b1/30825655/2040241179_dc34a140c93a435892eb105af751d890/P0.jpg',
        image2: 'https://media-photos.depop.com/b1/30825655/2040241182_3733f6422b5c4b9fb45b39210abc59b8/P0.jpg',
        image3: 'https://media-photos.depop.com/b1/30825655/2040241183_5b3f2b4ac49c461f950270a809218541/P0.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sellerId: 1,
        productName: 'Xhilaration Women\'s Brown Clogs',
        desc: 'Xhilaration vintage y2k women\'s leather and wood platform mule heels, size 10.',
        category: 'Footwear',
        price: 35.00,
        previewImage: 'https://media-photos.depop.com/b1/30825655/1461101080_45712ee9cd2f42d694c8564afd119644/P0.jpg',
        image1: 'https://media-photos.depop.com/b1/30825655/1461101082_6325f637eda74d16bcc549af6cd0b8ea/P0.jpg',
        image2: 'https://media-photos.depop.com/b1/30825655/1461101083_bec9642b32b94c199efa1f24557eb26f/P0.jpg',
        image3: 'https://media-photos.depop.com/b1/30825655/1461101081_f15fe0a57d0e4e90a56046ca977b020a/P0.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sellerId: 1,
        productName: 'Women\'s Brown Jacket',
        desc: 'Brandon Thomas women\'s vintage y2k dark brown patchwork suede jacket, size S.',
        category: 'Coats and Jackets',
        price: 50.00,
        previewImage: 'https://media-photos.depop.com/b1/30825655/2307426298_a9daf7b13b7448d7aec4a8ff4661765c/P0.jpg',
        image1: 'https://media-photos.depop.com/b1/30825655/2307426303_b0e6546fc10c4efea51e3f8eb93088e6/P0.jpg',
        image2: 'https://media-photos.depop.com/b1/30825655/2307426299_74769bf3080c41e6ba75af37eb4b7c85/P0.jpg',
        image3: 'https://media-photos.depop.com/b1/30825655/2307426300_46c7fbb687f84202975ba35ed072dce4/P0.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sellerId: 1,
        productName: 'Women\'s Red and Orange Pajamas',
        desc: 'Gilligan & O\'Malley women\'s vintage orange and red floral semi sheer slip dress nightie, size L.',
        category: 'Tops',
        price: 20.00,
        previewImage: 'https://media-photos.depop.com/b1/30825655/1854549362_688e9546e67f44a1a362b5cacbf109c8/P0.jpg',
        image1: 'https://media-photos.depop.com/b1/30825655/1854549387_21abfbf278c148fe943ab327d45e894c/P0.jpg',
        image2: 'https://media-photos.depop.com/b1/30825655/1854549457_ade940fdc5194f4e8e92cc2dd66cf15b/P0.jpg',
        image3: 'https://media-photos.depop.com/b1/30825655/1854549527_19b6b73190a84a7598e03d0d66e65de3/P0.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};