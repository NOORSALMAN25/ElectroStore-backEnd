const router = require('express').Router()
const productCtrl = require('../controllers/Product_controllers')
const reviewCtrl = require('../controllers/Review_controllers')

router.post('/', productCtrl.AddingProduct)
router.get('', productCtrl.GettingAllProducts)
router.get('/:id', productCtrl.GettingOneProduct)
router.put('/:id', productCtrl.UpdateProduct)
router.delete('/:id', productCtrl.DeletingProduct)

//reviews routes
router.get('/:productId/reviews', reviewCtrl.reviews_getAll)
router.post('/:productId/reviews', reviewCtrl.reviews_create_post)
router.delete('/:productId/reviews/:reviewId', reviewCtrl.reviews_delete_delete)

module.exports = router
