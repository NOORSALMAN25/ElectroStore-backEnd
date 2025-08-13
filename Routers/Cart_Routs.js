const router = require('express').Router()
const cartCtrl = require('../controllers/Cart_controllers')
const middleware = require('../middleware/index')

router.get('/:userId', cartCtrl.getCart)
router.post(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  cartCtrl.addToCart
)
router.delete(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  cartCtrl.clearCart
)
router.delete(
  '/:userId/:itemId',
  middleware.stripToken,
  middleware.verifyToken,
  cartCtrl.removeFromCart
)

module.exports = router
