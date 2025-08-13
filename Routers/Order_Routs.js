const router = require('express').Router()
const broductCtrl = require('../controllers/Order_controllers')
const middleware = require('../middleware/index')

router.post(
  '',
  middleware.stripToken,
  middleware.verifyToken,
  broductCtrl.AddingOrder
)
router.get('', broductCtrl.GettingAllOrder)
router.get('/:id', broductCtrl.GettingOneOrder)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  broductCtrl.UpdateOrder
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  broductCtrl.DeletingOrder
)

module.exports = router
