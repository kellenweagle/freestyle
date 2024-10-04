'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.ProductImage, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        hooks: true
      })
    }
  }
  Product.init({
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productName: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};