// src/routes/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { JSX } from "react";
import useLogout from "../hooks/useLogout";

interface Props {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
    const { auth } = useAuth();

    if (!auth?.accessToken || auth?.role !== 'admin') {
        const logout = useLogout();
        logout();
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
