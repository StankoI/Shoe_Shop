const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    availability: { type: Number, default: 0 },
    size: Number,
    img: String,
    categories: [String]
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}
);

module.exports = mongoose.model('Product', productSchema, 'Products');