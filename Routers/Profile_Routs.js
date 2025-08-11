const router = require('express').Router()
const profileCtrl = require('../controllers/Profile_controller')

router.get('/:userId', profileCtrl.userprofile_get)
router.put('/:userId', profileCtrl.userprofile_update)
router.put('/:userId', profileCtrl.userUpdatePassword)

module.exports = router
