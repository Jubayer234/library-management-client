import React, { createContext, useEffect, useState } from 'react'

import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext('');
const auth= getAuth(app);

const googleProvider = new GoogleAuthProvider();

    

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const signIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (displayName,photo) => {
        return updateProfile(auth.currentUser, {
           displayName: displayName, photoURL: photo
         })
       }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
             setLoading(false);
         });
         return () =>{
             unSubscribe();
         }
     },[])

    const authInfo ={
        user,
        loading,
        signIn,
        createUser,
        logIn,
        logOut,
        updateUserProfile
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;