import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, emailprovider } from '../firebase-config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {FcGoogle} from 'react-icons/fc';

function Login({ setIsAuth }) {

    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate('/');
            });
    };

    return (
        <div className='login-page'>

            <div className='login'>
                <button className='login-google-btn' onClick={signInWithGoogle}><FcGoogle />Sign in with Google</button>
            </div>

            <div className='login'>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="submit" value="Login" />
            </div>

        </div>
    )

}

export default Login