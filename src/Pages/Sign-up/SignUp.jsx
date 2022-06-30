import React from "react";

import background from "../../assets/BG.jpg";
import axios from "axios";
import { RiInsertRowBottom } from "react-icons/ri";

export default function SignUp() {
  const [inputType, setInputType] = React.useState(true);
  const [inputUrl, setInputUrl] = React.useState("/instructor/signup");
  const fileRef = React.useRef();

  const [instructorData, setInstructorData] = React.useState({
    name: "",
    password: "",
  });
  const [StudentData, setStudentData] = React.useState({
    name: "",
    code: "",
    imageURL: "",
    password: "",
  });

  async function Sign_Up(e) {
    e.preventDefault();
    axios.defaults.baseURL = "https://damp-brook-82087.herokuapp.com/";
    let dataInput = inputType ? instructorData : StudentData;
    console.log(dataInput, "from dataInput before signing up");

    const file = fileRef.current.files[0];
    console.log(file, "from file");
    const fileName = file.name;
    const type = file.type;
    const response = await fetch(
      `https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/createpresignedurl/${fileName}?filetype=${type}`
    );
    const presignedUrl = await response.json();
    console.log(presignedUrl.postURL, "from post url");
    fetch(presignedUrl.postURL, {
      method: "PUT",
      body: file,
      Headers: {
        ContentType: type,
      },
    }).then((res) => {
      if (res.statusText === "OK") {
        dataInput.imageURL = presignedUrl.getURL;
        console.log(dataInput, "from dataInput");
        console.log(presignedUrl.getURL, "from get url");
        axios
          .post(inputUrl, dataInput)
          .then((response) => alert(response.data.message))
          .catch((error) => alert(error.message));
      }
    });
  }
  function setData(event) {
    const { name, value } = event.target;
    inputType
      ? setInstructorData((prev) => ({ ...prev, [name]: value }))
      : setStudentData((prev) => ({ ...prev, [name]: value }));
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
            className={
              " w-[49%] p-2 rounded-sm font-bold " +
              (inputType ? "bg-green-500" : "bg-white hover:bg-white/[0.8]")
            }
            onClick={() => {
              setInputType(true);
              setInputUrl("/instructor/signup");
            }}
          >
            as Instructor
          </button>
          <button
            className={
              " w-[49%] p-2 rounded-sm font-bold " +
              (inputType ? "bg-white hover:bg-white/[0.8]" : "bg-green-500")
            }
            onClick={() => {
              setInputType(false);
              setInputUrl("/students/signup");
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

          {!inputType && (
            <div className="mb-3">
              <label className="SignUp-Label">Code</label>
              <input
                className="SignUp-Input"
                name="code"
                type="number"
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

          {!inputType && (
            <div className="mb-3">
              <label className="SignUp-Label">Choose your photos</label>
              <input
                className="SignUp-Input"
                ref={fileRef}
                name="file"
                type="file"
                multiple
              />
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
