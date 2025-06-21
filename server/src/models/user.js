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
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: "client"
    },
    orders_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        default: []
    }]
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model("User", UserSchema, "User");