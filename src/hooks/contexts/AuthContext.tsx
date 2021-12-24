import React, { useEffect } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface UserProps {
    user?: User;
    isLogged: boolean;
    logout: () => void;
    signIn: (userLogin: User) => void;
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

    function signIn(userLogin: User){
        setUser({
            email: userLogin.email,
            password: userLogin.password
        });
        localStorage.setItem("user", Date.now() +"."+ Math.random()*1 + ".21");
        alert("Bem vindo!");
        navigate("/pokemon/fav");
    }

    function logout(){
        setUser({
            email:"",
            password:""
        });
        localStorage.removeItem("user");
        setIsLogged(false);
        alert("Deslogado com sucesso!");
        navigate("/");
    }
    
    useEffect(() => {
        const userSaved = localStorage.getItem("user");
        if (userSaved && !isLogged) {
            setIsLogged(true);
            navigate("/pokemon/fav");
            alert("Você já está logado!");
        } else {
            setIsLogged(true);
        }
    }, [isLogged, navigate]);

    return (
        <AuthContext.Provider value={{ isLogged, logout, user, signIn }}>
            {props.children}
        </AuthContext.Provider>
    );
}
