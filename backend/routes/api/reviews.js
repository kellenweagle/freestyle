const express = require('express');
const router = express.Router();

const { Review, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// Get All Reviews
router.get('/', async(req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [
        {model: User, attributes: ["firstName", "lastName"]}
      ]
    });

    console.log(reviews)

    res.status(200);
    return res.json(reviews);
  } catch (e) {
    return next(e);
  }
})

// create a review
router.post('/', requireAuth, async(req, res, next) => {
  try {

    const {
      review,
      stars
    } = req.body;

    const { user } = req;

    if (!user) {
      const error = new CustomError("Forbidden", 403);
      throw error;
    }

    const newReview = await Review.create({
      userId: user.id,
      review,
      stars
    });


      return res.status(201).json(newReview);
    } catch (e) {
    next(e);
  }
});


// delete a review 
router.delete('/:reviewId', requireAuth, async(req, res, next) => {
  try {

    const id = req.params.reviewId

    const user = req.user
    const reviewToDelete = await Review.findByPk(id)

    if(!reviewToDelete) {
      throw new CustomError("Review couldn't be found", 404)
    }

    if(user.id !== reviewToDelete.userId) {
      const error = new CustomError("Forbidden", 403);
      throw error;
    }

    await reviewToDelete.destroy()

    res.json(reviewToDelete)

  } catch(e) {
    next(e)
  }
})

module.exports = router;