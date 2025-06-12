import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";


interface AuthProviderProps {
    children: ReactNode;
}

interface AuthData {
    name: string;
    email: string;
    phoneNumber: string;
    role: string;
    password: string;
    accessToken: string;
}

interface AuthContextType {
    auth: AuthData;
    setAuth: Dispatch<SetStateAction<AuthData>>;
}


const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [auth, setAuth] = useState<AuthData>(() => {
        const storedAuth = sessionStorage.getItem("auth");
        return storedAuth ? JSON.parse(storedAuth) : {
            name: '',
            email: '',
            phoneNumber: '',
            role: '',
            password: '',
            accessToken: ''
        };
    });

    useEffect(() => {
        sessionStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;