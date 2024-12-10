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