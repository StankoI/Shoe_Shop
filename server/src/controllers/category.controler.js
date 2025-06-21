const Category = require('../models/category');

async function AddCategory(req, res) {
    try {
        const {
            category
        } = req.body;

        const newCategory = new Category({ category });
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function getCategory(req, res) {
    try {
        const categories = await Category.find().
            select('_id category')

        res.status(200).json(categories);
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}

async function RemoveCategory(req, res) {
    try{
            const id = req.params.id;
            await Category.findByIdAndDelete(id);
            
            res.sendStatus(200);
        }
        catch(err){
            res.sendStatus(500);
        }
}

module.exports = { AddCategory, getCategory, RemoveCategory}