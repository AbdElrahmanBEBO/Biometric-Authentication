import React, { useRef } from "react";
import background from "../../assets/BG.jpg";
import axios from "axios";
import { RiInsertRowBottom } from "react-icons/ri";
import { v4 } from "uuid";
import { downloadImg, uploadImg } from "../../api/firebase/firebaseStorage";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [inputType, setInputType] = React.useState(true);
  const [inputUrl, setInputUrl] = React.useState("/instructor/signup");
  const navigate = useNavigate();
  const inputImgRef = useRef();
  console.log(inputType, inputUrl, "f rom input type and input url");
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
    if (inputType) {
      // then he is an instructor
      axios
        .post(inputUrl, dataInput)
        .then((res) => {
          alert(res.data.message);
          navigate("/SignIn");
        })
        .catch((err) => alert(err.response.data.message));

      return;
    }

    console.log("from signing up a student");
    if (!inputType) {
      // then he is a student
      console.log("from signing up a student");
      const file = inputImgRef.current.files[0];

      const imgURL = await uploadPostImg(file);
      console.log(imgURL, "from image url");
      dataInput.imageURL = imgURL;
      axios
        .post(inputUrl, dataInput)
        .then((response) => {
          alert(response.data.message);
          navigate("/SignIn");
        })
        .catch((error) => alert(error.response.data.message));
    }
  }
  function setData(event) {
    const { name, value } = event.target;
    inputType
      ? setInstructorData((prev) => ({ ...prev, [name]: value }))
      : setStudentData((prev) => ({ ...prev, [name]: value }));
  }

  async function getThefile(e) {
    try {
      e.stopPropagation();
      e.preventDefault();

      await uploadPostImg(e.target.files[0]);
    } catch (errImg) {}
  }

  async function uploadPostImg(file) {
    try {
      const imgId = v4();
      const res = await uploadImg(file, `${imgId}`);
      const resUrl = await downloadImg(imgId);
      return resUrl;
    } catch (error) {}
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
              {/* <input
                className="SignUp-Input"
                ref={fileRef}
                name="file"
                type="file"
                multiple
              /> */}
              <input
                className="SignUp-Input"
                ref={inputImgRef}
                name="file"
                type="file"
                onChange={getThefile}
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
