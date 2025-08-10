const User = require('../models/User')
const middleware = require('../middleware/index')

exports.userprofile_get = async (req, res) => {
  try {
    const userId = req.params.id

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
    const userId = req.params.id

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
