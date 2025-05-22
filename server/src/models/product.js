const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type:String
    },
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: Number,
        default: 0
    },
    size: {
        type:Number
    },
    img: {
        type:String
    },
    categories: 
    {
        type: [String]
    },
    ratingsIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ratings'
    }]
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}
);

module.exports = mongoose.model('Product', productSchema, 'Products');