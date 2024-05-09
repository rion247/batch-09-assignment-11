import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../../FireBase/fireBase.Config';

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

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                SetUser(currentUser);
                SetLoading(false);
            } else {
                SetUser(null);
                SetLoading(false);
            }
        });

        return () => {
            unSubscribe();
        }

    }, [reload])

    const signOutUser = () => {
        signOut(auth);
    }

    const userProfileUpdater = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

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