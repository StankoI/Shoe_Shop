import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.get('http://localhost:8080/admin/logout', {
                withCredentials: true,
            });
            setAuth({
                name: '',
                email: '',
                phoneNumber: '',
                role: '',
                password: '',
                accessToken: ''
            });
            sessionStorage.removeItem("auth");
            navigate('/login');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return logout;
};

export default useLogout;
