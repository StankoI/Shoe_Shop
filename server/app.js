const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB  = require('./src/config/db');
const app = express();
connectDB();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

const cookieParser = require('cookie-parser');

app.use(cookieParser());

const AdminProductRouter = require('./src/routes/admin/product.router')
const AdminColorRouter = require('./src/routes/admin/color.router')
const AdminCategoriesRouter = require('./src/routes/admin/categories.router')
const AdminLoginRouter = require('./src/routes/admin/adminUser.router')
const AdminLogoutRouter = require('./src/routes/admin/logout.router')
const AdminRefreshRouter = require('./src/routes/admin/refresh.router')
const AdminOrdersRouter = require('./src/routes/admin/orders.router')
const AdminUsersRouter = require('./src/routes/admin/users.router')
const AdminInvoiceRouter = require('./src/routes/admin/ivoice.router')

const ClientProductRouter = require('./src/routes/client/product.router')
const ClientColorRouter = require('./src/routes/client/color.router')
const ClientCategoryRouter = require('./src/routes/client/category.router')
const ClientUserRouter = require('./src/routes/client/user.router')
const ClientOrderRouter = require('./src/routes/client/order.router')
const ClientLoginRouter = require('./src/routes/client/auth.router')
const ClientRefreshRouter = require('./src/routes/client/refresh.router')
const ClientLogoutRouter = require('./src/routes/client/logout.router')



const PORT = process.env.PORT || 8080;

app.get('/' , (req , res) => {
    res.send('Hello world');
})

//ADMIN ENDPOINTS
app.use("/admin/products", AdminProductRouter);
app.use("/admin/color", AdminColorRouter);
app.use("/admin/category", AdminCategoriesRouter);
app.use("/admin/login", AdminLoginRouter);
app.use("/admin/logout", AdminLogoutRouter);
app.use("/admin/refresh", AdminRefreshRouter);
app.use("/admin/orders", AdminOrdersRouter);
app.use("/admin/users", AdminUsersRouter);
app.use("/admin/invoice", AdminInvoiceRouter);


//CLIENT ENDPOINTS
app.use("/client/products", ClientProductRouter);
app.use("/client/color", ClientColorRouter);
app.use("/client/category", ClientCategoryRouter);
app.use("/client/user", ClientUserRouter);
app.use("/client/order", ClientOrderRouter);
app.use("/client/login", ClientLoginRouter);
app.use("/client/refresh", ClientRefreshRouter);
app.use("/client/logout", ClientLogoutRouter)


app.listen(PORT , () => {
    console.log(`App listening on port: ${PORT}`);
})