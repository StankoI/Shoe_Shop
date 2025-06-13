const color = require('../models/color');
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
            }).lean();


        const modifiedProducts = products.map(product => ({
            ...product,
            categories: product.categories.map(cat => cat.category),
            color: product.color?.color || null
        }));

        res.status(200).json(modifiedProducts);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function getProduct(req, res) {
    try {
        const id = req.params.id;
        const product = await Product.findById(id)
            .select('name price img color')
            .populate({
                path: 'color',
                select: 'color -_id'
            }).lean();

        const modifiedProduct = {
            ...product,
            color: product.color?.color || null
        }
            
        res.status(200).json(modifiedProduct);
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

async function getProductPrice(req, res) {
    try{
        const id = req.params.id;
        const product = await Product.findById(id)
        .select('price')

        res.status(200).json(product)
    }
    catch(err){
        res.status(400).json({error:err.message})
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

module.exports = { addProduct, getAllProducts, addInStock, getProduct, getProductPrice};