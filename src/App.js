import React, { useState } from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        console.log(isAuth);
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = '/login';
      });
  }

  return (
    <Router>
      <div className='App'>
        <nav className='navbar'>
          <h1>Blog react</h1>
          <div className='links'>
            <Link to='/'>Home</Link>
            {!isAuth ? (
              <Link to='/login'>Login</Link>
            ) : (
              <>
                <Link to='/create'>Criar post</Link>
                <button onClick={signUserOut}>Sair</button>
              </>
            )}
          </div>
        </nav>
        <div className='content'>
          <Routes>

            <Route exact path="/" element={<Home isAuth={isAuth}/>} />

            <Route exact path="/home" element={<Home isAuth={isAuth}/>} />

            <Route exact path="/login" element={<Login setIsAuth={setIsAuth} />} />

            <Route exact path="/create" element={<Create isAuth={isAuth}/>} />

            <Route exact path="/blogs/:id" element={<BlogDetails />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App