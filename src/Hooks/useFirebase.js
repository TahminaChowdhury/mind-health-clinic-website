import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/Firebase.init";

initAuth()

const useFirebase = () => {
    const auth = getAuth();
    // states
    const [user, setUser] =useState({});
    const [error, setError] = useState("");

    // set email and password
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    

    
    // handle email and password
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }


    // handle sign up and  log in
    const handleSignup = event => {
        event.preventDefault();
        createNewUserWithEmailAndPassword(email, password);
    };
    const handleLogin = (event) => {
        event.preventDefault();
        loginWithEmailandPassword(email, password)
    };
    


    // handle sign up with email and password
    const createNewUserWithEmailAndPassword = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            setError("");
        })
        .catch(error => {
            setError(error.message);
        })
    }

    // handle log in with email password
    const loginWithEmailandPassword = (email, password) =>{

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    
    // providers
    const googleProvider = new GoogleAuthProvider();

    // sign in with google
    const signinWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    // State Changed
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);

            } else {
              setUser({})
            }
          });
    }, [])

    // signout
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            
          });
    }

    return{
        user,
        error,
        handleEmail,
        handlePassword,
        handleSignup,
        handleLogin,
        signinWithGoogle,
        logOut,
    }
}

export default useFirebase;