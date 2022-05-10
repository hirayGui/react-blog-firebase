import React, { useState } from 'react'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(){

  const [isAuth, setIsAuth] = useState(false);

  return(
    <Router>
      <div className='App'>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <div className='content'>
          <Routes>

            <Route exact path="/" element={<Home />} />

            <Route exact path="/login" element={<Login setIsAuth={setIsAuth}/>} />
            
            <Route exact path="/create" element={<Create />} />

            <Route exact path="/blogs/:id" element={<BlogDetails />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App