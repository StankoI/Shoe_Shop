const Color = require('../models/color');

async function AddColor(req, res) {
    try {
        const {
            color
        } = req.body;

        const newColor = new Color({ color });
        const savedColor = await newColor.save();
        res.status(201).json(savedColor);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function getColors(req, res) {
    try {
        const colors = await Color.find()
        .select("_id color");
        res.status(200).json(colors);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { AddColor ,getColors };
