import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {



    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(ture);


    const createUser = (email, password) =>{
        // setLoading(ture);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    const singOutUser = () =>{
        return signOut(auth);
    }

    const signInWithGoogle = () =>{
       
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
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


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;