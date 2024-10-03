const express = require('express');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const { Product, ProductImages } = require('../../db/models');


const router = express.Router();

router.get('/', async(req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [
        {model: ProductImages}
      ]
    });

    res.status(200);
    return res.json(products);
  } catch (e) {
    return next(e);
  }
})

module.exports = router;