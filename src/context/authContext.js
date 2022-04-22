import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../firebase";

export const authContext = createContext()

export const useAuth = () =>{
    const context = useContext(authContext)
    if(!context) throw new Error("There is not Auth Provider")
    return context
}
export function AuthProvider({children}){

    const [user, setUser] = useState(null);

    const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
    
    const login = (email, password) =>
    signInWithEmailAndPassword(auth,email, password)

    const logout = () => signOut(auth)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        })
        return () => unsubscribe();
    },[])
    return (
        <authContext.Provider value={{signUp, login, user, logout}}>
            {children}
        </authContext.Provider>
    )
}

