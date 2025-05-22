const product = require('../models/product');
const Product = require('../models/product');

async function addProduct(req, res) {
    try {
        const {
            name,
            description,
            price,
            availability,
            size,
            img,
            categories
        } = req.body;

        const newProduct = new Product({
            name,
            description,
            price,
            availability,
            size,
            img,
            categories
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

async function getProduct(req, res) {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "product not find" })
        }

        res.status(201).json(product);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function deleteProduct(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "product not find" })
        }

        res.status(201).json(product);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const {
            name,
            description,
            price,
            availability,
            size,
            img,
            categories
        } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                description,
                price,
                availability,
                size,
                img,
                categories
            },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Продуктът не е намерен.' });
        }

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { addProduct, getAllProducts, getProduct, deleteProduct, updateProduct};