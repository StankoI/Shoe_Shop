const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "client"
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model("User", UserSchema, "User");