const router = require('express').Router()
const productCtrl = require('../controllers/Product_controllers')
const reviewCtrl = require('../controllers/Review_controllers')


router.post('/', broductCtrl.AddingProduct)
router.get('', broductCtrl.GettingAllProducts)
router.get('/:id', broductCtrl.GettingOneProduct)
router.put('/:id', broductCtrl.UpdateProduct)
router.delete('/:id', broductCtrl.DeletingProduct)

//reviews routes
router.get('/:productId/reviews', reviewCtrl.reviews_getAll)
router.post('/:productId/reviews', reviewCtrl.reviews_create_post)
router.delete('/:productId/reviews/:reviewId', reviewCtrl.reviews_delete_delete)


module.exports = router
