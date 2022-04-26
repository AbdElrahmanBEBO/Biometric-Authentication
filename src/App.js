import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./Pages/Navbar";
import Reports from "./Pages/Reports/Reports"
import SignIn from './Pages/Sign-in/SignIn';
import SignUp from './Pages/Sign-up/SignUp';

export default function App() {
  return (
    <Router >      
      <Navbar />

      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/Reports' element={<Reports />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='*'/>
      </Routes>
    </Router>
  );
}