const { Schema } = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordDigest: { type: String, required: true },
    role: { type: String, default: 'user' }
  },
  { timestamps: true }
)

module.exports = userSchema
