import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {



    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const singOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () => {
       
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    }, []);


    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }


    const authInfo = {
        user,
        // loading,
        createUser,
        signInUser,
        singOutUser,
        signInWithGoogle,
        setUser,
        updateUserProfile,
        setLoading,
        loading


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;