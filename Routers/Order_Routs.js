const router = require('express').Router()
const broductCtrl = require('../controllers/Order_controllers')
const middleware = require('../middleware/index')

router.post('', broductCtrl.AddingOrder)
router.get('', broductCtrl.GettingAllOrder)
router.get('/:id', broductCtrl.GettingOneOrder)
router.put('/:id', broductCtrl.UpdateOrder)
router.delete('/:id', broductCtrl.DeletingOrder)

module.exports = router
