import mongoose from 'mongoose'
const schema = new mongoose.Schema(
  {
    name: {
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
)

export default mongoose.model('User', schema)
