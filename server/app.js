const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB  = require('./src/config/db');
const app = express();
connectDB();

app.use(express.json());

app.use(cors());

const AdminProductRouter = require('./src/routes/admin/product.router')
const AdminColorRouter = require('./src/routes/admin/color.router')
const AdminCategoriesRouter = require('./src/routes/admin/categories.router')

const ClientProductRouter = require('./src/routes/client/product.router')
const ClientColorRouter = require('./src/routes/client/color.router')
const ClientCategoryRouter = require('./src/routes/client/category.router')
const ClientOrderRouter = require('./src/routes/client/order.router')


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
app.use("/client/color", ClientColorRouter);
app.use("/client/category", ClientCategoryRouter);
app.use("/client/order", ClientOrderRouter);



app.listen(PORT , () => {
    console.log(`App listening on port: ${PORT}`);
})