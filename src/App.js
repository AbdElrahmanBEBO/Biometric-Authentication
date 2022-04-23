import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Reports from "./Pages/Reports/Reports"
import Navbar from "./Pages/Navbar"

export default function App() {
  return (
    <Router>      
      <Navbar />
      <Reports />      
      {/* <Routes>
        <Route path='/Home'/>
        <Route path='/Reports' element={<Reports />}/>
        <Route path='/SignUp'/>
        <Route path='/SignIn'/>
        <Route path='*'/>
      </Routes> */}
    </Router>
  );
}