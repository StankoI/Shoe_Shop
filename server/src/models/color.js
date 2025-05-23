const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    color:{
        type: String
    }
})

module.exports = mongoose.model('Color', colorSchema, 'Color');
