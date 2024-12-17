const express = require('express');
const router = express.Router();

const { Product, ProductImage, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth')

// Get All Products
router.get('/', async(req, res, next) => {
  try {
    const products = await Product.findAll(
      {
      include: [
        {model: ProductImage}
      ]
    }
    );

    res.status(200);
    return res.json(products);
  } catch (e) {
    return next(e);
  }
})

// Create a product
router.post('/', requireAuth, async(req, res, next) => {
  try {

    const {
      productName,
      desc,
      category,
      price,
      previewImage,
      image1,
      image2,
      image3,
    } = req.body;

    const { user } = req;

    if(!user) {
        const error = new CustomError ("Forbidden", 403);
        throw error
    }

    const newProduct = await Product.create({
        sellerId: user.id,
        productName,
        desc,
        category,
        price
      })

    if(newProduct) {
      let options = {};
      options.tableName = "ProductImages";

      if (process.env.NODE_ENV === 'production') {
        options.schema = process.env.SCHEMA;  // define your schema in options object
      }
      const productImages = await ProductImage.bulkCreate([
        { productId: newProduct.id, url: previewImage, preview: true },
        { productId: newProduct.id, url: image1, preview: false },
        { productId: newProduct.id, url: image2, preview: false },
        { productId: newProduct.id, url: image3, preview: false },
      ], options)

      let formattedNewProduct = {
        "id": newProduct.id,
        "sellerId": newProduct.sellerId,
        "productName": newProduct.productName,
        "desc": newProduct.desc,
        "category": newProduct.category,
        "price": newProduct.price,
        "previewImage": newProduct.previewImage
      }
      return res.status(201).json(formattedNewProduct)
    }
  } catch(e) {
    next(e)
  }
})

// Delete a product
router.delete('/:productId', requireAuth, async(req, res, next) => {
  try {

    const id = req.params.productId
    console.log(id)
    const user = req.user
    const productToDelete = await Product.findByPk(id)

    if(!productToDelete) {
      throw new CustomError("Product couldn't be found", 404)
    }

    if(user.id !== productToDelete.sellerId) {
      const error = new CustomError("Forbidden", 403);
      throw error;
    }

    await productToDelete.destroy()

    res.json(productToDelete)

  } catch(e) {
    next(e)
  }
})

module.exports = router;