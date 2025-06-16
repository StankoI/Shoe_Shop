import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/login';
import LandingPage from './pages/landingPage';
import { AuthProvider } from './context/authProvider';
import Navbar from './compoments/layouts/navbar/navbar';
import ColorPage from './pages/colorPage';


const App = () => {

    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/' element={<LandingPage />}></Route>
                    <Route path='/colors' element={<ColorPage/>}></Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
