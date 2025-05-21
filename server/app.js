const express = require('express');
require('dotenv').config();


const connectDB  = require('./src/config/db');
const app = express();
connectDB();

const PORT = process.env.PORT || 8080;

app.get('/' , (req , res) => {
    res.send('Hello world');
})

app.listen(PORT , () => {
    console.log(`App listening on port: ${PORT}`);
})