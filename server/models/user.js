import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('user', userSchema)

export default userModel