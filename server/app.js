const express = require('express');
require('dotenv').config();

const connectDB  = require('./src/config/db');
const app = express();
connectDB();

app.use(express.json());

const AdminProductRouter = require('./src/routes/admin/product.router')
const AdminColorRouter = require('./src/routes/admin/color.router')
const AdminCategoriesRouter = require('./src/routes/admin/categories.router')

const ClientProductRouter = require('./src/routes/client/product.router')

const PORT = process.env.PORT || 8080;

app.get('/' , (req , res) => {
    res.send('Hello world');
})

//ADMIN ENDPOINTS
app.use("/admin/products", AdminProductRouter);
app.use("/admin/color", AdminColorRouter);
app.use("/admin/categories", AdminCategoriesRouter);

//CLIENT ENDPOINTS
app.use("/client/products", ClientProductRouter);

app.listen(PORT , () => {
    console.log(`App listening on port: ${PORT}`);
})