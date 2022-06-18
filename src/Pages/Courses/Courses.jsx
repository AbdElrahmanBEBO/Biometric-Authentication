import React from "react";
import Navbar from "../Navbar/Navbar";

import ListOfCourses from "./ListOfCourses";
import { AiOutlineClose } from "react-icons/ai";

export default function Courses(props) {
  const [toggleModel, setToggleModel] = React.useState(false);
  const [newCourse, updateNewCourse] = React.useState({
    courseName: "",
    courseCode: "",
    studentsNumber: 0,
    startDate: 0,
  });
  const [AllCourses, UpdateCourses] = React.useState([]);

  function fillCourseContent(event) {
    const { name, value } = event.target;

    updateNewCourse(prevState => { 
      return {...prevState, [name]:value}
    })
  }
  function submitCourse(event) {
    event.preventDefault();
    UpdateCourses((prevCourses) => [...prevCourses, newCourse]);
  }

  //  New--Course--Model
  const Model = (
    <div
      className="
      bg-black bg-opacity-70 overflow-y-auto overflow-x-hidden fixed 
       top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full
       flex justify-center items-center
      "
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto sm:m-0 mt-[250px]">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            class="
             absolute top-3 right-2.5 
             text-gray-400 hover:text-gray-200 hover:bg-gray-800 bg-transparent 
             rounded-lg text-sm p-1.5 ml-auto 
             inline-flex items-center 
            "
            onClick={() => setToggleModel(false)}
          >
            <AiOutlineClose className="text-xl" />
          </button>

          <div class="py-6 px-6 lg:px-8">
            {/* Header */}
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Create New Course
            </h3>

            <form class="space-y-6" action="#" onSubmit={submitCourse}>
              {/* Course-Name */}
              <div className="flex justify-between py-2 sm:px-5 ">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Course Name
                </label>
                <input
                  className="pl-2"
                  type="text"
                  name="courseName"
                  value={newCourse.courseName}
                  onChange={(e) => fillCourseContent(e)}
                />
              </div>

              {/* Course-Code */}
              <div className="flex justify-between py-2 sm:px-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Course Code
                </label>
                <input
                  className="pl-2"
                  type="text"
                  name="courseCode"
                  value={newCourse.courseCode}
                  onChange={(e) => fillCourseContent(e)}
                />
              </div>

              {/* Start-Date */}
              <div className="flex justify-between py-2 sm:px-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={newCourse.startDate}
                  className="w-[60%] pl-2"
                  onChange={(e) => fillCourseContent(e)}
                />
              </div>

              {/* Submit-Btn */}
              <button
                type="submit"
                class="
                text-white bg-blue-700 hover:bg-blue-800 
                 focus:ring-4 focus:outline-none w-full
                 focus:ring-blue-300 font-medium 
                 rounded-lg text-sm px-5 py-2.5 text-center 
                "
              >
                Create Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="m-5 mt-8">
        <div className="grid justify-center lg:flex lg:justify-between items-center">
          <div>
            <h1 className="text-lg md:text-3xl font-semibold">
              <label>Welcome Doctor:</label>
              <span className="bg-green-200 mx-5 px-3 font-bold rounded-lg shadow-md">
                {props.instractorName}
              </span>
            </h1>
          </div>
          <button
            data-modal-toggle="create-course"
            className="bg-blue-500 shadow-lg p-2 mt-6 lg:mt-0 rounded-md text-white font-bold"
            onClick={() => setToggleModel(true)}
          >
            Create New Subject
          </button>
        </div>
        {toggleModel && Model}

        <div>
          {AllCourses.map((course) => {
            return <ListOfCourses key={course.courseCode} {...course} />;
          })}
        </div>
      </div>
    </>
  );
}
