import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/login';
import LandingPage from './pages/landingPage';
import { AuthProvider } from './context/authProvider';


const App = () => {

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/' element={<LandingPage />}></Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
