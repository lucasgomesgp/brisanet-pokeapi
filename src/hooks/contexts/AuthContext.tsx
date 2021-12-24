import { useEffect } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface UserProps {
    user?: User;
    isLogged: boolean;
    logout: () => void;
}

interface User {
    email?: string;
    password?: string;
}

interface ContextProviderProps {
    children: ReactNode;
}


export const AuthContext = createContext({} as UserProps);


export function AuthProvider(props: ContextProviderProps) {
    let navigate = useNavigate();
    const [user, setUser] = useState<User>({
        email: "",
        password: ""
    });

    const [isLogged, setIsLogged] = useState<boolean>(false);

    function logout(){
        setUser({
            email:"",
            password:""
        });
        localStorage.removeItem("user");
        navigate("/");
    }
    
    useEffect(() => {
        const userSaved = localStorage.getItem("user");
        if (userSaved) {
            setIsLogged(true);
            navigate("/pokemon/all");
            alert("Você já está logado!"+isLogged);
        } else {
            setIsLogged(true);
        }
    }, [isLogged, navigate]);

    return (
        <AuthContext.Provider value={{ isLogged, logout, user }}>
            {props.children}
        </AuthContext.Provider>
    );
}
