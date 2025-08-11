const router = require('express').Router()
const profileCtrl = require('../controllers/Profile_controller')

router.get('/:userId', profileCtrl.userprofile_get)
router.put('/:userId', profileCtrl.userprofile_update)

module.exports = router
