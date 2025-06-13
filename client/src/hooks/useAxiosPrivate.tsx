import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";
import { useNavigate } from "react-router-dom";

const axiosPrivate = axios.create({
    baseURL: "http://localhost:8080",
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

const useAxiosPrivate = () => {
    const { auth, setAuth } = useAuth();
    const refresh = useRefreshToken();
    const navigate = useNavigate();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async error => {
                const prevRequest = error.config;
                if (error.response?.status === 401 && !prevRequest._retry) {
                    prevRequest._retry = true;
                    try {
                        const newAccessToken = await refresh();
                        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                        return axiosPrivate(prevRequest);
                    } catch (refreshErr) {
                        setAuth({
                            name: '',
                            email: '',
                            phoneNumber: '',
                            role: '',
                            password: '',
                            accessToken: ''
                        });
                        localStorage.removeItem("auth");
                        navigate('/login')
                        return Promise.reject(refreshErr);
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, [auth, refresh, setAuth]);

    return axiosPrivate;
};

export default useAxiosPrivate;
