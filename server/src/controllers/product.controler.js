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
        const products = await Product.find()
            .select('_id name description price img categories color in_stock createdAt')
            .populate({
                path: 'categories',
                select: 'category -_id'
            })
            .populate({
                path: 'color',
                select: 'color -_id'
            });

        res.status(201).json(products);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function addInStock(req, res) {
    try {
        const id = req.params.id;
        const {
            size,
            quantity
        } = req.body

        const updatedProduct = await Product
            .findByIdAndUpdate(
                id,
                { $push: { in_stock: { size, quantity } } },
                { new: true });
        res.status(201).json(updatedProduct);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { addProduct, getAllProducts, addInStock };