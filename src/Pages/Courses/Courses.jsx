import React from "react";
import ListOfCourse from "./ListOfCourses";

export default function Courses(props) {
  return (
    <div className="m-5">
      <div className="grid justify-center lg:flex lg:justify-between items-center">
        <div>
          <h1 className="text-lg md:text-3xl font-semibold">
            <label>Welcome Doctor:</label>
            <span className="bg-green-200 mx-5 px-3 font-bold rounded-lg shadow-md">
              {props.instractorName}
            </span>
          </h1>
        </div>
        <button className="bg-blue-500 shadow-lg p-2 mt-6 lg:mt-0 rounded-md text-white font-bold">
          Create New Subject
        </button>
      </div>
      <div>
        <ListOfCourse
          courseName="Cryptography"
          courseCode="402"
          studentsNumber="65"
          dataCreated="8/5/2022"
          studentsReport="/Reports"
        />
        <ListOfCourse
          courseName="Artificial Intilegance"
          courseCode="408"
          studentsNumber="50"
          dataCreated="8/5/2022"
          studentsReport="/Reports"
        />
        <ListOfCourse
          courseName="N-Linear Programming"
          courseCode="494"
          studentsNumber="40"
          dataCreated="8/5/2022"
          studentsReport="/Reports"
        />
        <ListOfCourse
          courseName="Computer Architcture"
          courseCode="428"
          studentsNumber="57"
          dataCreated="8/5/2022"
          studentsReport="/Reports"
        />
        <ListOfCourse
          courseName="Final Project"
          courseCode="409"
          studentsNumber="60"
          dataCreated="8/5/2022"
          studentsReport="/Reports"
        />
      </div>
    </div>
  );
}
