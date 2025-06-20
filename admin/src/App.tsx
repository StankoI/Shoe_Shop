import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/login';
import LandingPage from './pages/landingPage';
import { AuthProvider } from './context/authProvider';
import Navbar from './compoments/layouts/navbar/navbar';
import ColorPage from './pages/colorPage';
import CategoriesPage from './pages/categoriesPage';
import ProductPage from './pages/productPage';
import PrivateRoute from './routes/privateRoute';


const App = () => {

    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/login' element={<LoginPage />}></Route>

                    <Route path='/' element={
                        <PrivateRoute>
                            <LandingPage />
                        </PrivateRoute>
                    }></Route>
                    <Route path='/colors' element={
                        <PrivateRoute>
                            <ColorPage />
                        </PrivateRoute>
                    }></Route>
                    <Route path='/categories' element={
                        <PrivateRoute>
                            <CategoriesPage />
                        </PrivateRoute>
                    }>
                    </Route>
                    <Route path='/products' element={
                        <PrivateRoute>
                            <ProductPage />
                        </PrivateRoute>
                    }></Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
