import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Reports from "./Pages/Reports/Reports"
import Navbar from "./Pages/Navbar"
import SignIn from './Pages/Reports/SignIn';
import SignUp from './Pages/Reports/SignUp';

export default function App() {
  return (
    <Router >      
      <Navbar />
      {/* <Reports />       */}
      <Routes>
        <Route path='/Home'/>
        <Route path='/Reports' element={<Reports />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='*'/>
      </Routes>
    </Router>
  );
}