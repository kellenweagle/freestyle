'use strict';

const {ProductImages, Sequelize} = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'ProductImages';

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
}


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        productId: 1, 
        url: 'https://media-photos.depop.com/b1/30825655/2361047634_07d5bfe673c94b2faa3224ced251201b/P0.jpg',
        previewImg: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        url: 'https://media-photos.depop.com/b1/30825655/2361047638_1b531e8dd8b546569b610621a0b4d2ed/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        url: 'https://media-photos.depop.com/b1/30825655/2361047641_5f0d0d7156534afbafecb21e0b7e34ad/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1, 
        url: 'https://media-photos.depop.com/b1/30825655/2361047646_0304df1ed03a48c1bd898482078e2f7d/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        url: 'https://media-photos.depop.com/b1/30825655/2040241180_71b606a1a8aa475095a767959313d304/P0.jpg',
        previewImg: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        url: 'https://media-photos.depop.com/b1/30825655/2040241179_dc34a140c93a435892eb105af751d890/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2, 
        url: 'https://media-photos.depop.com/b1/30825655/2040241182_3733f6422b5c4b9fb45b39210abc59b8/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        url: 'https://media-photos.depop.com/b1/30825655/2040241183_5b3f2b4ac49c461f950270a809218541/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        url: 'https://media-photos.depop.com/b1/30825655/1461101080_45712ee9cd2f42d694c8564afd119644/P0.jpg',
        previewImg: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        url: 'https://media-photos.depop.com/b1/30825655/1461101082_6325f637eda74d16bcc549af6cd0b8ea/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3, 
        url: 'https://media-photos.depop.com/b1/30825655/1461101083_bec9642b32b94c199efa1f24557eb26f/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        url: 'https://media-photos.depop.com/b1/30825655/1461101081_f15fe0a57d0e4e90a56046ca977b020a/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        url: 'https://media-photos.depop.com/b1/30825655/2307426298_a9daf7b13b7448d7aec4a8ff4661765c/P0.jpg',
        previewImg: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        url: 'https://media-photos.depop.com/b1/30825655/2307426303_b0e6546fc10c4efea51e3f8eb93088e6/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        url: 'https://media-photos.depop.com/b1/30825655/2307426299_74769bf3080c41e6ba75af37eb4b7c85/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        url: 'https://media-photos.depop.com/b1/30825655/2307426300_46c7fbb687f84202975ba35ed072dce4/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        url: 'https://media-photos.depop.com/b1/30825655/1854549362_688e9546e67f44a1a362b5cacbf109c8/P0.jpg',
        previewImg: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        url: 'https://media-photos.depop.com/b1/30825655/1854549387_21abfbf278c148fe943ab327d45e894c/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        url: 'https://media-photos.depop.com/b1/30825655/1854549457_ade940fdc5194f4e8e92cc2dd66cf15b/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        url: 'https://media-photos.depop.com/b1/30825655/1854549527_19b6b73190a84a7598e03d0d66e65de3/P0.jpg',
        previewImg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, null, {});
  }
};