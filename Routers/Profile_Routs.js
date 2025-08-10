const router = require('express').Router()
const ProfileCtrl = require('../controllers/Profile_controller') 
  //Calling API'S
  //we just need the get to show the information and put to allow the user to edit his name or email only
  router.get('/profile', ProfileCtrl.profile_show_get)

module.exports = router
