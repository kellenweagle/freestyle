'use strict';

const {Product, Sequelize} = require('../models');

let options = {};
options.tableName = 'Products';

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
}

module.exports = {


    up: async (queryInterface, Sequelize) => {
      options.tableName = "Products";
      return queryInterface.bulkInsert(options, [
        {
          sellerId: 1,
          productName: 'Women\'s Purple Blouse',
          desc: 'Vintage sheer lavender purple scalloped collar blouse. Beautiful embroidered collar! Has pleats and buttons down the middle. Brand is Alicia. Marked a size 12 in women\'s. 100% polyester material.',
          category: 'Shirt',
          price: 20.00
        },
        {
          sellerId: 1,
          productName: 'Rampage Women\'s Dress',
          desc: 'Rampage green tiger print body con dress. Marked a size 5 in women\'s. Lined and has a 6 inch high slit opening in the back. Zipper opening on back.',
          category: 'Dress',
          price: 50.00
        },
        {
          sellerId: 1,
          productName: 'Women\'s Jacket',
          desc: 'Red bomber jacket. Has corduroy sleeves and that little clasp on the top of the collar like moto jackets. Pockets in the front and inner lining. Brand is SMACK and marked a size medium in men\'s but it\'s wayyyy smaller! It is more like a small in women\'s which is why I\'m listing it as that.',
          category: 'Jacket',
          price: 35.00
        },
        {
          sellerId: 1,
          productName: 'The Mountain Men\'s Blue and Grey T-shirt',
          desc: 'The Mountain Big Cats Jungle Tee',
          category: 'Shirt',
          price: 12.00
        },
        {
          sellerId: 2,
          productName: 'American Vintage Women\'s Black and White Sweatshirt',
          desc: 'San Francisco Crewneck Sweatshirt',
          category: 'Jacket',
          price: 15.00
        },
        {
          sellerId: 1,
          productName: 'SO Clothing Women\'s Blue and Navy Skirt',
          desc: 'Y2K Low Rise Mini Skirt 11',
          category: 'Skirt',
          price: 15.00
        },
        {
          sellerId: 1,
          productName: 'The North Face Women\'s Green Jacket',
          desc: 'Large green North Face fleece jacket',
          category: 'Jacket',
          price: 18.00
        },
        {
          sellerId: 1,
          productName: 'Old Navy Women\'s Blue and Navy Dress',
          desc: 'Large Old Navy denim dress!',
          category: 'Dress',
          price: 15.00
        },
        {
          sellerId: 3,
          productName: 'White Stag Women\'s multi T-shirt',
          desc: 'L White Stag Alaska Graphic T-shirt',
          category: 'Shirt',
          price: 10.00
        },
        {
          sellerId: 1,
          productName: 'White Stag Women\'s T-shirt',
          desc: 'A staple tee that is 100% cotton and ribbed. You can not go wrong with this one, neutral cream colored and textured.',
          category: 'Shirt',
          price: 15.00
        },
        {
          sellerId: 1,
          productName: 'Women\'s Cream and Pink Vest',
          desc: 'Pastel cream sleeveless knit / vest. Watercolor floral, paisley, and leopard design - because why choose? Looks cute with shirts or trousers, or even a collared shirt underneath.',
          category: 'Shirt',
          price: 20.00
        },
        {
          sellerId: 1,
          productName: 'Women\'s T-shirt',
          desc: '100% cotton yellow tee. Potted plants with 🇺🇸 across. In love with this color and the graphic.',
          category: 'Shirt',
          price: 15.00
        },
      ], {})
    },

    down: async (queryInterface, Sequelize) => {
      options.tableName = "Products";
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {})
    }
  }
