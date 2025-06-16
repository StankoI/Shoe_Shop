import { JSX } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";


interface Props{
    children: JSX.Element;
}

const PrivateRoute = ({children}: Props) => {

    const {auth} = useAuth();

    if(!auth?.accessToken){
        return <Navigate to='/' replace/>
    }

    return children;
}

export default PrivateRoute;