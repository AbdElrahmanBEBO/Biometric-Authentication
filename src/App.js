import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Home,
  SignIn,
  SignUp,
  Courses,
  Reports,
  ViewCam,
} from "./Pages";
import UserMainPage from "./Pages/UserMain";

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Courses"
          element={<Courses instractorName="Rasha Shaheen" />}
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/user-main-page" element={<UserMainPage />} />

        <Route path="/:courseID/ViewCam" element={<ViewCam />} />
        <Route path="/:courseID/report" element={<Reports />} />
      </Routes>
    </Router>
  );
}
