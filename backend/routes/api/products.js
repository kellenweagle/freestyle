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

    if (!user) {
      const error = new CustomError("Forbidden", 403);
      throw error;
    }

    const newProduct = await Product.create({
      sellerId: user.id,
      productName,
      desc,
      category,
      price,
      previewImage,
      image1,
      image2,
      image3
    });

    if (newProduct) {
      const productImages = await ProductImage.bulkCreate([
        { productId: newProduct.id, url: previewImage, previewImg: true },
        { productId: newProduct.id, url: image1, previewImg: false },
        { productId: newProduct.id, url: image2, previewImg: false },
        { productId: newProduct.id, url: image3, previewImg: false },
      ]);

      let formattedNewProduct = {
        id: newProduct.id,
        sellerId: newProduct.sellerId,
        productName: newProduct.productName,
        desc: newProduct.desc,
        category: newProduct.category,
        price: newProduct.price,
        previewImage: previewImage
      };

      return res.status(201).json(formattedNewProduct);
    }
  } catch (e) {
    next(e);
  }
});


// Update a Product
router.put('/:id/update', requireAuth, async (req, res, next) => {
  try {
    const { productName, desc, category, price, previewImage, image1, image2, image3 } = req.body;

    const { user } = req;
    const id = req.params.id;

    const productToUpdate = await Product.findByPk(id, {
      include: [{
        model: ProductImage,
        as: 'ProductImages',
        attributes: ['id', 'url', 'previewImg']
      }]
    });

    if (!productToUpdate) {
      const error = new CustomError("Product couldn't be found", 404);
      throw error;
    }

    if (user.id !== 1) {
      const error = new CustomError("Forbidden", 403);
      throw error;
    }

    const updatedProduct = await productToUpdate.update({
      sellerId: user.id,
      productName,
      desc,
      category,
      price,
      previewImage,
      image1,
      image2,
      image3 
    });

    const productImages = productToUpdate.ProductImages;
    if (productImages.length > 0) {
      await productImages[0].update({ url: previewImage, previewImg: true });
      if (productImages[1]) await productImages[1].update({ url: image1 });
      if (productImages[2]) await productImages[2].update({ url: image2 });
      if (productImages[3]) await productImages[3].update({ url: image3 });
    }

    let formatUpdatedProduct = {
      "id": updatedProduct.id,
      "sellerId": updatedProduct.sellerId,
      "productName": updatedProduct.productName,
      "desc": updatedProduct.desc,
      "category": updatedProduct.category,
      "price": updatedProduct.price,
      "previewImage": updatedProduct.previewImage,
      "image1": updatedProduct.image1,
      "image2": updatedProduct.image2,
      "image3": updatedProduct.image3
    };

    res.json(formatUpdatedProduct);

  } catch (e) {
    next(e);
  }
});


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