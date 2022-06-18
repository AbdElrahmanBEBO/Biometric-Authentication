import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListOfCourse from "./ListOfCourses";
import { apiURL } from "../../api/constants";
export default function Courses(props) {
  const user = useSelector((state) => state.user);
  const [courses, setCourses] = useState(null);
  const isLoggedIn = user.isLoggedIn;
  const navigate = useNavigate();

  const fetchCourses = async () => {
    axios
      .get(`${apiURL}courses/${user.id}`)
      .then((res) => setCourses(res.data))
      .catch(console.log);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");

      alert("you have to Loggin first");
    }
  }, [user]);
  const renderCourses = () => {
    if (courses) {
      return courses.map((course) => {
        console.log(course.start_date, "from course inside map");

        return (
          <ListOfCourse
            key={course.id}
            courseName={course.name}
            courseCode={course.course_id}
            studentsNumber={course.number_of_students}
            dataCreated={course.start_date}
            studentsReport="/Reports"
          />
        );
      });
    }
  };
  return (
    <div className="m-5">
      <div className="grid justify-center lg:flex lg:justify-between items-center">
        <div>
          <h1 className="text-lg md:text-3xl font-semibold">
            <label>Welcome Doctor:</label>
            <span className="bg-green-200 mx-5 px-3 font-bold rounded-lg shadow-md">
              {user.name}
            </span>
          </h1>
        </div>
        <button className="bg-blue-500 shadow-lg p-2 mt-6 lg:mt-0 rounded-md text-white font-bold">
          Create New Subject
        </button>
      </div>
      <div>{renderCourses()}</div>
    </div>
  );
}
