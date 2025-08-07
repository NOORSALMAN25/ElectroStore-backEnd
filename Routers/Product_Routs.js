const router = require('express').Router()
const broductCtrl = require('../controllers/Product_controllers')

router.post('', broductCtrl.AddingProduct)
router.get('', broductCtrl.GettingAllProducts)
router.get('/:id', broductCtrl.GettingOneProduct)
router.put('/:id', broductCtrl.UpdategProduct)
router.delete('/:id', broductCtrl.DeletinProduct)

module.exports = router
