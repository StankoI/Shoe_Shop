import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import AboutPage from './pages/about'
import ProductPage from './pages/product'
import Footer from './components/layout/footer/footer';
import Navbar from './components/layouts/navbar/navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { AuthProvider } from './context/authProvider';
import PublicRoute from './routes/publicRoutes';
import ShopingCartPage from './pages/shopingCart';
import { ShoppingCartProvider } from './contexts/shopingCartContext';
import CheckoutPage from './pages/checkout';


function App() {
    return (
      <AuthProvider>
        <ShoppingCartProvider>
            <Router>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    <Route path="/login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />

            <Route path="/register" element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            } />

                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/shopingCart" element={<ShopingCartPage />} />
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                </Routes>
                <Footer />
            </Router>
        </ShoppingCartProvider>
        </AuthProvider>
    )

}

export default App;
