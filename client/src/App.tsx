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


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
