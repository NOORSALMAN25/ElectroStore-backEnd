const Review = require('../models/Review')
const user = require('../models/User')
const Product = require('../models/Product')

exports.reviews_getAll = async (req, res) => {
  try {
    const productId = req.params.productId
    const reviews = await Review.find({ product: productId })
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.reviews_create_post = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId, 10)
    if (isNaN(productId)) {
      return res.status(400).json({ error: 'Invalid product ID' })
    }
    const { comment, rating } = req.body
    if (!comment || rating === undefined) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const ratingNum = Number(rating)
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {
      return res.status(400).json({ error: 'Invalid rating value' })
    }

    const reviewData = {
      comment,
      rating: ratingNum,
      product: req.params.productId,
      user: req.body.user
    }

    const review = await Review.create(reviewData)
    res.status(201).json(review)
  } catch (error) {
    console.error('Error creating review:', error)
    res.status(500).json({ error: error.message })
  }
}

exports.reviews_delete_delete = async (req, res) => {
  try {
    const { reviewId } = req.params
    const review = await Review.findById(reviewId)
    if (!review) {
      return res.status(404).json({ error: 'Review not found' })
    }
    if (review.user.toString() !== res.locals.payload.id) {
      return res
        .status(403)
        .json({ error: 'Not authorized to delete this review' })
    }

    await review.deleteOne()
    res.status(200).json({ msg: 'Review Deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
