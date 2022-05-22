import React from "react";

import background from "../../assets/BG.jpg";
import axios from "axios";
import { RiInsertRowBottom } from "react-icons/ri";

export default function SignUp() {

  
  const [inputType, setInputType] = React.useState(true);
  const [StudentData, setStudentData] = React.useState({
    name: "",
    code: "",
    password: "",
  });
  
  function Sign_Up() {
    axios.defaults.baseURL = "https://damp-brook-82087.herokuapp.com/";
    axios
    .post("/students/signup", StudentData)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  }

  function setData(event) {
    const { name, value } = event.target;
    setStudentData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }


  return (
    <div
      className="    
        flex justify-center lg:justify-end items-center	
        h-[100vh] bg-fixed bg-cover bg-center bg-no-repeat 
      "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="lg:mr-[230px] flex flex-col">
        <div className="flex justify-between mb-3">
          <button
            className="bg-white w-[49%] p-2 rounded-sm font-bold hover:bg-white/[0.9]"
            onClick={() => {
              setInputType(true);
            }}
          >
            as Instructor
          </button>
          <button
            className="bg-white w-[49%] p-2 rounded-sm font-bold hover:bg-white/[0.9]"
            onClick={() => {
              setInputType(false);
            }}
          >
            as Student
          </button>
        </div>

        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[350px]"
          onSubmit={Sign_Up}
        >          
          <div className="mb-3">
            <label className="SignUp-Label">Name</label>
            <input
              className="SignUp-Input"
              name="name"
              type="text"
              placeholder="Name"
              onChange={(event) => setData(event)}
              required
            />
          </div>

          { (!inputType && 
          <div className="mb-3">
            <label className="SignUp-Label">Code</label>
            <input
              className="SignUp-Input"
              name="code"
              type="number"
              pattern="([1|2][0-9](27|28)[0-9]{3})"
              placeholder="Code"
              onChange={(event) => setData(event)}
              required
            />
          </div>
          )}
          <div className="mb-3">
            <label className="SignUp-Label">Password</label>
            <input
              className="SignUp-Input"
              name="password"
              type="password"
              placeholder="*********"
              onChange={(event) => setData(event)}
              required
            />
          </div>

          {(!inputType &&
            <div className="mb-3">
              <label className="SignUp-Label">Choose your photos</label>
              <input className="SignUp-Input" name="file" type="file" multiple />
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              className="
              bg-black hover:bg-teal-400 text-white 
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow
              "
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
