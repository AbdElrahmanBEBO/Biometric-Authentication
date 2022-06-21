import React from "react";

import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../api/constants";

import { MdFormatListBulleted } from "react-icons/md";

export default function Reports() {
  const { courseID } = useParams();
  const [StudentsData, updateStudents] = React.useState([]);

  useEffect(() => {
    const fetchReportQuery = axios
      .get(`${baseURL}courses/${courseID}/attendance-report`)
      .then((res) => updateStudents(res.data));
  }, []);

  function toggleViewMenu(Key) {
    updateStudents((prevData) => {
      return prevData.map((studentContent) => {
        return studentContent.student_code === Key
          ? { ...studentContent, View: !studentContent.View }
          : studentContent;
      });
    });
  }

  //Student Header
  const StudentsHeader = (
    <thead className="bg-black text-white">
      <tr className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-between items-center text-3xl">
        <th className="grid">Student Id</th>
        <th className="hidden sm:grid col-span-2">Student Name</th>
        <th className="hidden lg:grid">Total Attendance</th>
      </tr>
    </thead>
  );

  //Student Body
  const StudentsBody = (
    <tbody>
      {StudentsData.map((studentInfo) => {
        return (
          <>
            <tr className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 text-3xl justify-between items-center">
              {/* Student Id */}
              <td className="flex justify-between">
                <div className="flex">
                  <MdFormatListBulleted
                    className="p-1 mr-4 bg-black text-white text-4xl rounded-lg 2xl:hidden"
                    onClick={() => toggleViewMenu(studentInfo.student_code)}
                  />
                  {studentInfo.student_code}
                </div>
              </td>

              {/* Student Name */}
              <td className="hidden sm:grid col-span-2 overflowX">
                {studentInfo.name}
              </td>

              {/*  Total attendance */}
              <td className="hidden lg:flex 2xl:justify-center">
                <div className="bg-green-500 flex justify-center text-white p-2 w-[20%] rounded-md shadow-2xl">
                  {studentInfo.num_of_attendance}
                </div>
              </td>
            </tr>

            {/* Responsive View of StudentData */}
            {studentInfo.View && (
              <div className="flex flex-col text-4xl p-3 m-3 border-green-400 border-4 lg:hidden">
                {/* Student Name */}
                <div className="sm:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
                  <div>StudentName</div>
                  {studentInfo.name}
                </div>

                {/*  Total Attendance  */}
                <div className="lg:hidden flex flex-col sm:flex-row justify-between py-2 my-2">
                  <div className="mb-3">
                    <div>Total Attendance</div>
                    <div className="bg-green-500 flex justify-center text-white p-2 m-2 w-[20%] rounded-md shadow-2xl">
                      {studentInfo.num_of_attendance}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </tbody>
  );

  return (
    <table className="grid items-center my-9 mx-12 border-2 border-black">
      {StudentsHeader}
      {StudentsBody}
    </table>
  );
}
