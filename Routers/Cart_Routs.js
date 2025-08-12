const router = require('express').Router()
const cartCtrl = require('../controllers/Cart_controllers')
const middleware = require('../middleware/index')

router.get('/:userId', cartCtrl.getCart)
router.post('/:userId', cartCtrl.addToCart)
router.delete('/:userId', cartCtrl.clearCart)
router.delete('/:userId/:itemId', cartCtrl.removeFromCart)

module.exports = router
