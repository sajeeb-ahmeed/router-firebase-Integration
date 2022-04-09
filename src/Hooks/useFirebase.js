import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";
const { useState, useEffect } = require("react")

const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);
const useFirebase = () => {
    const [user, setUser] = useState({});
    // console.log(user.displayName);

    useEffect(() => {

    }, []);

    const singInByGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const googleUser = result.user;
                setUser(googleUser)
                console.log(googleUser);
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);

            })


    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, []);

    return {
        user,
        setUser,
        handleSignOut,
        singInByGoogle
    }
}

export default useFirebase;