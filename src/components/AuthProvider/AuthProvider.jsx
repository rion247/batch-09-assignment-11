import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../../FireBase/fireBase.Config';
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, SetUser] = useState(null);

    const [loading, SetLoading] = useState(true);

    const [reload, SetReload] = useState(false);

    const createUserManually = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUserManually = (email, password) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        SetLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        // const { data } = await axios.get('http://localhost:5000/logout', { withCredentials: true })
        // console.log('testing', data);//test
        SetLoading(true);
        return signOut(auth);
    }

    const userProfileUpdater = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const tokenForEmail = currentUser?.email || user?.email;//test
            const verifyUserWithEmail = { email: tokenForEmail };//test

            if (currentUser) {
                SetUser(currentUser);
                axios.post('http://localhost:5000/jwt', verifyUserWithEmail, { withCredentials: true })
                    .then(res => { console.log(res.data) });//test
                SetLoading(false);
            } else {
                const { data } = axios.post('http://localhost:5000/logout', { withCredentials: true })
                console.log('testing', data);
                SetUser(null);
                SetLoading(false);
            }
        });

        return () => {
            unSubscribe();
        }

    }, [reload, user?.email])

    const authInfo = {
        user,
        loading,
        SetReload,
        createUserManually,
        signInUserManually,
        googleSignIn,
        signOutUser,
        userProfileUpdater
    }

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;