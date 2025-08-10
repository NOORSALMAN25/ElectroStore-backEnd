const Profile = require('../Routers/Profile_Routs')

//API'S
const profile_show_get = async (req, res) => {
  try {
    console.log('user', req.session.user)
    res.send('Profile page')
  } catch (error) {
    console.log(error)
    res.status('500').send('Server error')
  }
}
// it dosnt shows the informationn of the user at the database it just print information

// const profile_update_put = async (req, res) => {

// }

module.exports = {
  profile_show_get,
  profile_update_put
}
