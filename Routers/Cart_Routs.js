const router = require('express').Router()
const cartCtrl = require('../controllers/Cart_controllers')

router.get('/:userId', cartCtrl.getCart)
router.post('/:userId', cartCtrl.addToCart)
router.delete('/:userId/:itemId', cartCtrl.removeFromCart)

module.exports = router
