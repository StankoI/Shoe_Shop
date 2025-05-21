const Product = require('../models/product');

export async function addProduct (req, res){
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