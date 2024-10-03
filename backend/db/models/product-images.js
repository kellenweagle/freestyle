'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductImages.belongsTo(models.Product, {
        foreignKey: 'productId'
      })
    }
  }
  ProductImages.init({
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    previewImg: { 
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'ProductImages',
  });
  return ProductImages;
};