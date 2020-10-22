import mongoose from 'mongoose'

export async function connection() {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphql', { useNewUrlParser: true })
    console.log('Successfully Established Connection with MongoDB')
  } catch (error) {
    console.log('Failed to Establish Connection with MongoDB with Error: ' + error)
  }
}
