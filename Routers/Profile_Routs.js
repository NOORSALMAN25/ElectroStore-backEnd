const router = require('express').Router()
const profileCtrl = require('../controllers/Profile_controller')
const middleware = require('../middleware')

router.get('/:userId', profileCtrl.userprofile_get)
router.put(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  profileCtrl.userprofile_update
)
router.put(
  '/:userId/password',
  middleware.stripToken,
  middleware.verifyToken,
  profileCtrl.userUpdatePassword
)

module.exports = router
