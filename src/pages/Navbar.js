import React from 'react';
import {Link} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase-config';


const Navbar = ({isAuth, setIsAuth}) => {

    const signUserOut = () => {
        signOut(auth)
        .then(() => {
            console.log(isAuth);
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = '/';
        });
    }

    return(
        <nav className='navbar'>
            <h1>Blog react</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                {isAuth && <Link to='/create'>Criar post</Link>}
                {!isAuth ? <Link to='/login'>Login</Link> : <button onClick={signUserOut}>Sair</button>}
                
                
            </div>
        </nav>
    )
}

export default Navbar