import React from "react";
import background from "../../assets/BG.jpg";
import axios from "axios";

export default function SignIn() {
  const [inputType, setInputType] = React.useState(true);
  const [inputUrl, setInputUrl] = React.useState("/instructors/login");

  const [instructorState, setInstructorState] = React.useState({
    name: "",
    password: "",
  });
  const [studentState, setStuedentState] = React.useState({
    code: "",
    password: "",
  });

  function LogIn(event) {
    axios.defaults.baseURL = "https://damp-brook-82087.herokuapp.com/";
    let dataInput = inputType ? instructorState : studentState;
    axios
      .post(inputUrl, dataInput)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    
    event.preventDefault();
  }

  function setData(event) {
    const { name, value } = event.target;
    inputType
      ? setInstructorState((prev) => ({ ...prev, [name]: value }))
      : setStuedentState((prev) => ({ ...prev, [name]: value }));

  }
  console.log(instructorState)
  console.log(studentState)

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
              setInputUrl("/instructors/login");
            }}
          >
            as Instructor
          </button>
          <button
            className="bg-white w-[49%] p-2 rounded-sm font-bold hover:bg-white/[0.9]"
            onClick={() => {
              setInputType(false);
              setInputUrl("/students/login");
            }}
          >
            as Student
          </button>
        </div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[350px]"
          onSubmit={LogIn}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {inputType ? "Name" : "Code"}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name={inputType ? "name" : "code"}
              placeholder={inputType ? "Name" : "Code"}
              value={inputType ? instructorState.name : studentState.code}
              onChange={setData}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="******************"
              value={inputType ? instructorState.password : studentState.password}
              onChange={setData}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-black hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
