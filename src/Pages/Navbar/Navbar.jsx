import React from "react";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  const [viewMenu, setViewMenu] = React.useState(false);

  return (
    <nav
      className=" 
            overflow-visible flex justify-between items-center bg-black sticky top-0 text-white p-5
            border-b-2 border-[aqua] 
        "
    >
      <div
        className={`
          ${!viewMenu ? "flex" : "hidden"}
          items-center flex-shrink-0  mr-6
        `}
      >
        <span className="font-bold text-xl tracking-tight">
          Student Attendance
        </span>
      </div>

      <div
        className={`
          ${viewMenu ? "flex text-sm" : "hidden"}
          Navbar-Links w-full sm:flex sm:justify-end items-start
        `}
      >
        <a href="/">Home</a>
        <a href="/reports">Reports</a>
        <a href="/SignUp">SignUp</a>
        <a href="/SignIn">SignIn</a>
        <a href="/ViewCam">Camera</a>
      </div>

      <div className="sm:hidden">
        <button
          className="
           flex items-center px-3 py-2 border rounded 
           hover:text-white hover:border-white
          "
          onClick={() => setViewMenu((prevState) => !prevState)}
        >
          <BsList
            className={`
             ${viewMenu ? "text-[aqua]" : "text-white"}
             h-6 w-6 bg-black
            `}
          />
        </button>
      </div>
    </nav>
  );
}
