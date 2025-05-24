const Category = require('../models/category');

async function AddCategory(req, res){
    try{
        const {
            category
        } = req.body;

        const newCategory = new Category({category});
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports = {AddCategory}