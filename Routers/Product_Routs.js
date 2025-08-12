const router = require('express').Router()
const productCtrl = require('../controllers/Product_controllers')
const reviewCtrl = require('../controllers/Review_controllers')
const middleware = require('../middleware/index')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  productCtrl.AddingProduct
)
router.get('', productCtrl.GettingAllProducts)
router.get('/:productId', productCtrl.GettingOneProduct)
router.put(
  '/:productId',
  middleware.stripToken,
  middleware.verifyToken,
  productCtrl.UpdateProduct
)
router.delete(
  '/:productId',
  middleware.stripToken,
  middleware.verifyToken,
  productCtrl.DeletingProduct
)

//reviews routes
router.get('/:productId/reviews', reviewCtrl.reviews_getAll)
router.post(
  '/:productId/reviews',
  middleware.stripToken,
  middleware.verifyToken,
  reviewCtrl.reviews_create_post
)
router.delete(
  '/:productId/reviews/:reviewId',
  middleware.stripToken,
  middleware.verifyToken,
  reviewCtrl.reviews_delete_delete
)

module.exports = router
