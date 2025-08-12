const router = require('express').Router()
const authController = require('../controllers/Auth_controllers')
const middleware = require('../middleware')

router.post('/login', authController.Login)
router.post('/signup', authController.Register)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  authController.CheckSession
)

module.exports = router
