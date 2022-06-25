import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import pic from "./B.jpeg";

export default function Student() {
  const StudentName = "Youseif Alaa Elden Mohamed Mahmoud";
  const StudentId = "1827127";


  const [toggleModel, setToggleModel] = React.useState(false);

  const StudentInfo = (
    <div className="grid justify-center shadow-2xl w-[25vw] mx-10 bg-[#125758] rounded-sm">
      <div className="flex flex-col items-center my-12">
        <img src={pic} className="rounded-3xl shadow-2xl h-[300px] w-[300px]" />
        <div className="my-10 p-5 flex flex-col justify-between h-[25vh]">
          <label className="font-bold text-2xl">Name</label>
          <div className="text-xl ml-3 font-extrabold">{StudentName}</div>
          <label className="font-bold text-2xl">Id</label>
          <div className="text-xl ml-3 font-extrabold">{StudentId}</div>
        </div>
      </div>
    </div>
  );
  const StudentCourses = <div></div>;

    const Model = (
      <div
        className=" 
      bg-black bg-opacity-70 overflow-y-auto overflow-x-hidden fixed 
       top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full
       flex justify-center items-center text-black
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
                Enroll New Course
              </h3>

              <form class="space-y-6" action="#">
                {/* Course-Name */}
                <div className="flex justify-between py-2 sm:px-5 ">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Course Name
                  </label>
                  <input
                    className="pl-2"
                    type="text"
                    name="courseName"
                    // value={newCourse.courseName}
                    // onChange={(e) => fillCourseContent(e)}
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
                    // value={newCourse.courseCode}
                    // onChange={(e) => fillCourseContent(e)}
                  />
                </div>

                {/* Submit-Btn */}
                <button
                  type="submit"
                  class="
                text-white bg-blue-700 hover:bg-blue-800 
                 focus:ring-4 focus:outline-none w-full
                 focus:ring-blue-300 font-medium 
                 rounded-lg text-sm px-5 py-2.5 text-center outline-none
                "
                >
                  Enroll
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

  const EnrollBtn = (
    <button
      data-modal-toggle="create-course"
      className="bg-blue-500 hover:shadow-2xl p-2 mt-6 lg:mt-0 rounded-md text-white font-bold"
      onClick={() => setToggleModel(true)}
    >
      Enroll Courses
    </button>
  );

  return (
    <header className="flex justify-center items-center h-[100vh]">
      <div className="bg-[#2F4F4F] shadow-2xl rounded-md text-white p-10 w-[75vw] h-[80vh] flex justify-between">
        {StudentInfo}
        {StudentCourses}
        <div>{EnrollBtn}</div>
        {toggleModel && Model}
      </div>
    </header>
  );
}
