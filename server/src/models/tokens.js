const mongoose = require('mongoose')

const RefreshTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    expiresAt: {
        type: Date,
        required: true
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('RefreshToken', RefreshTokenSchema, 'RefreshToken');