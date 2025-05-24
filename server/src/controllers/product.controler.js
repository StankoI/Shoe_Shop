const product = require('../models/product');
const Product = require('../models/product');

async function addProduct(req, res) {
    try {
        const {
            name,
            description,
            price,
            img,
            categories,
            color
        } = req.body;

        const newProduct = new Product({
            name,
            description,
            price,
            img,
            categories,
            color
        })

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(201).json(products);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
}

module.exports = { addProduct, getAllProducts };