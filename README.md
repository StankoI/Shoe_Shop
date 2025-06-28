👟 Shoe_shop
Shoe_shop е пълнофункционално уеб приложение за онлайн магазин за обувки, изградено с React, Node.js, Express и TypeScript, с база данни MongoDB. Проектът е разделен на клиентска част, админ панел и сървър, като всяка част комуникира чрез REST API.

🧱 Архитектура
Проектът следва класически клиент-сървър модел:
Клиент – React приложение за потребителите (анонимни или логнати).
Админ – React приложение за администратори.
Сървър – Express сървър с API-та за клиента и админа.
База данни – MongoDB, използвана за съхранение на продукти, поръчки, потребители и др.

📡 Комуникация

Клиентът и админът комуникират със сървъра чрез REST API.
Сървърът взаимодейства с MongoDB за извличане и обработка на данни.

            +-----------------+           +-----------------+
            |                 |           |                 |
            |    Клиент       |           |     Админ       |
            | (React App)     |           | (React Admin)   |
            |                 |           |                 |
            +--------+--------+           +--------+--------+
                     |                             |
                     |                             |
                     |       HTTP Requests         |
                     |       (REST API)            |
                     |                             |
                     v                             v
              +------+-------------------------------+------+
              |                                             |
              |                  СЪРВЪР                    |
              |         (Node.js + Express + TS)           |
              |                                             |
              +----------------------+----------------------+
                                     |
                                     | Mongoose Queries
                                     v
                            +--------+--------+
                            |                 |
                            |   MongoDB       |
                            | (База данни)    |
                            |                 |
                            +-----------------+


🚀 Функционалности

🛍️ Клиентска част
Разглеждане на продукти, категории и цветове
Добавяне на продукти в количката
Създаване на поръчки
Регистрация и логин
Достъп до личен профил (информация и поръчки)
Редактиране на потребителски данни

Роутове (Frontend)
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
<Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
<Route path="/user" element={<PrivateRoute><UserPage /></PrivateRoute>} />
<Route path="/products" element={<ProductPage />} />
<Route path="/shopingCart" element={<ShopingCartPage />} />
<Route path="/checkout" element={<CheckoutPage />} />


🛠️ Админ Панел
Добавяне на нови продукти
Управление на категории и цветове
Преглед и редакция на клиенти
Преглед на поръчки
Добавяне на фактури

📌 API Ендпойнти
🔐 Аутентикация
POST /admin/login
POST /admin/logout
GET /admin/refresh
POST /client/login
POST /client/logout
GET /client/refresh

🧑 Клиенти
GET /client/user – Потребителски данни
GET /admin/users – Преглед на всички клиенти

🛒 Продукти и категории
GET /client/products
POST /admin/products
GET /admin/category, POST /admin/category
GET /admin/color, POST /admin/color

📦 Поръчки и фактури
POST /client/order
GET /admin/orders
POST /admin/invoice

⚙️ Технологии
Frontend: React, TypeScript, React Router
Backend: Node.js, Express, TypeScript
Database: MongoDB (Mongoose)
Security: JWT, HTTPOnly Cookies, dotenv, CORS
Dev Tools: nodemon, concurrently

▶️ Стартиране на проекта
1. Клониране на репото
bash
Копиране
Редактиране
git clone https://github.com/StankoI/Shoe_Shop

2. Настройка на backend

cd server
npm install
npm start

3. Настройка на frontend

cd client
npm install
npm run dev


