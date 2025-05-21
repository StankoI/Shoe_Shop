const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{type:String, required: true},
    description: String,
    price:{type:Number, required: true},
    availibility: {type: Number, default: 0},
    size: Number,
    img: String,
    created_at: {type: Date, default: Date.now},
    categories: [String]
});

module.exports = mongoose.model('Product', productSchema);