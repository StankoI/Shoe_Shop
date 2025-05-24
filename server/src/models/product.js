const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Color'
    },
    in_stock: {
        type: [{
            size: Number,
            quantity: Number
        }],
        default: []
    },
    ratings_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating',
        default: []
    }]
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}
);

module.exports = mongoose.model('Product', productSchema, 'Products');