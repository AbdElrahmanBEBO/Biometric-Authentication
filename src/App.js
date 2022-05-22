import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Navbar, Home, SignIn, SignUp, Courses, Reports, ViewCam } from './Pages';

export default function App() {
  return (
    <Router >      
      {/* <Navbar /> */}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Courses' element={<Courses instractorName="Rasha Shaheen"/>}/>
        <Route path='/Reports' element={<Reports />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/ViewCam' element={<ViewCam />}/>
        <Route path='*'/>
      </Routes>
    </Router>
  );
}