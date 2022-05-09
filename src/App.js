import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Navbar, SignIn, SignUp, Reports, ViewCam } from './Pages';

export default function App() {
  return (
    <Router >      
      <Navbar />

      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/Reports' element={<Reports />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/ViewCam' element={<ViewCam />}/>
        <Route path='*'/>
      </Routes>
    </Router>
  );
}