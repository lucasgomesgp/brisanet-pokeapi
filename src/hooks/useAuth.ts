import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

export function useAuth() {
    const contextValue = useContext(AuthContext);
    return contextValue;
}