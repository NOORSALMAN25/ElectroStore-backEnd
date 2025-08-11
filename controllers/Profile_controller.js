const User = require('../models/User')
const middleware = require('../middleware/index')

exports.userprofile_get = async (req, res) => {
  try {
    const userId = req.params.userId

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).send('user not found')
    }
    res.status(200).json(user)
  } catch (error) {
    throw error
  }
}

exports.userprofile_update = async (req, res) => {
  try {
    const { name, email } = req.body
    const userId = req.params.userId

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true }
    )

    if (!updatedUser) {
      return res.status(404).send('user not found')
    }
    res.status(200).json(updatedUser)
  } catch (error) {
    throw error
  }
}

exports.userUpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    let user = await User.findById(req.params.userId)
    let matched = await middleware.comparePassword(
      oldPassword,
      user.passwordDigest
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.userId, { passwordDigest })
      console.log(user)
      let payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }

      return res
        .status(200)
        .send({ status: 'Password Updates ', user: payload })
    }
    res.status(401).send({ status: 'error', msg: 'Old password did not match' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'error',
      msg: 'An error occurred updating password'
    })
  }
}
