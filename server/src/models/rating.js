const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    comment: { 
        type: String, 
        required: true
    },
    // commenterId:{ 
    //     type: mongoose.Schema.Types.ObjectId;\
    //       ==================================================
    //     !!!!!!трябва да се добави референция към колекцията!!!!!!!!
    //       ==================================================
    // },
    rate: Number,
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}
);

module.exports = mongoose.model('Rating', ratingSchema, 'Ratings');