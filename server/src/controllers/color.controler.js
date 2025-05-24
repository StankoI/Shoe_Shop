const Color = require('../models/color');

async function AddColor(req, res){
    try{
        const {
            color
        } = req.body;

        const newColor = new Color({color});
        const savedColor = await newColor.save();
        res.status(201).json(savedColor);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports = { AddColor };
