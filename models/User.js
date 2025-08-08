const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordDigest: { type: String, required: true },
    role: { type: String, default: 'user' }
  },
  { timestamps: true }
)

<<<<<<< HEAD:models/User.js
const User = mongoose.model('User', userSchema)
module.exports = User
=======
module.exports = mongoose.model('Auth', AuthSchema)
>>>>>>> main:models/Auth.js
