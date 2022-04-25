import React from "react";
import background from "../../assets/BG.jpg";

import Students from "../studentData";

export default function SignUp() {
  return (
    <div
      className="    
        flex justify-center lg:justify-end items-center	
        h-[calc(100vh-70px)] bg-fixed bg-cover bg-center bg-no-repeat 
      "
      style={{backgroundImage: `url(${background})`}}
    >
      <div className="lg:mr-[230px]">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[350px]"
          method="post"
        >
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="code"
              type="number"
              pattern="([1|2][0-9](27|28)[0-9]{3})"
              placeholder="Code"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              required
            />
          </div>
          {/* confirm password*/}
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="******************"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Choose your photos
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="file"
              type="file"
              multiple
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-black hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={Sign_up}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// SignIn function
function Sign_up() {
  var code = document.getElementById("code").value;
  var mach = code.match(/([1|2][0-9](27|28)[0-9]{3})/);
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var file = document.getElementById("file").files;

  if (password === confirmPassword) {
    if (mach) {
      // var data = {
      //     code: code,
      //     name: name,
      //     password: password,
      //     // file: file
      // }
      // var json = JSON.stringify(data);
      // localStorage.setItem(code, json);
      Students.push({
        code: code,
        name: name,
        password: password,
        confirmPassword: confirmPassword,
        file: file,
      });
      alert("Sign Up Successfully");
    } else {
      alert("Please enter a valid code");
    }
  } else {
    alert("Please enter a valid password");
  }
}
