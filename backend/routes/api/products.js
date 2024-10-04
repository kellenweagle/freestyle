const express = require('express');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const { Product, ProductImage } = require('../../db/models');


const router = express.Router();

router.get('/', async(req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [
        {model: ProductImage}
      ]
    });

    res.status(200);
    return res.json(products);
  } catch (e) {
    return next(e);
  }
})

module.exports = router;