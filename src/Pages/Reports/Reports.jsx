import React from "react";

//List and Check Icons
import { MdFormatListBulleted } from "react-icons/md";
import { RiNumber1 } from "react-icons/ri";

//Array of Students
import Students from "./studentData";

export default function Reports() {
  const [StudentsData, updateStudents] = React.useState(Students);

  //Student Data Body (Row by Row)
  const StudentsBody = StudentsData.map((studenInfo) => {
    return (
      <>
        <tr
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
            text-3xl justify-between items-center
          "
        >
          {/* Student Code */}
          <td className="flex justify-between">
            <div className="flex">
              <MdFormatListBulleted
                className="p-1 mr-4 bg-black text-white text-4xl rounded-lg 2xl:hidden"
                onClick={() => toggleViewMenu(studenInfo.Code)}
              />
              {studenInfo.Code}
            </div>
            {studenInfo.Attendance[studenInfo.lastAttend - 1] && (
              <div className="px-2 mx-3 rounded-lg bg-green-500 text-white" >
                {studenInfo.lastAttend}
              </div>
            )}
          </td>

          {/* Student Id */}
          <td className="hidden sm:grid">{studenInfo.StudentId}</td>

          {/* Student Name */}
          <td className="hidden lg:grid col-span-2 overflowX" dir="rtl">
            {studenInfo.StudnetName}
          </td>

          {/* Student Attendace  */}
          <td className="hidden xl:flex overflowX Attendance-Box">
            {studenInfo.Attendance.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    background: item
                      ? "rgb(34 197 94 / var(--tw-text-opacity))"
                      : "rgb(239 68 68 / var(--tw-text-opacity))",
                  }}
                >
                  {index + 1}
                </div>
              );
            })}
          </td>

          {/*  total attendance */}
          <td className="hidden 2xl:flex 2xl:justify-center">
            <div>{studenInfo.totalAttendance}</div>
          </td>
        </tr>

        {/* Responsive View of StudentData */}
        {studenInfo.View && (
          <div className="flex flex-col text-4xl p-3 m-3 border-green-400 border-4 2xl:hidden">
            {/* Student Code */}
            <div className="sm:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
              <div>StudentId </div>
              {studenInfo.StudentId}
            </div>

            {/* Student Id */}
            <div className="lg:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
              <div>StudentName</div>
              <div dir="rtl">{studenInfo.StudnetName}</div>
            </div>

            {/* Student Attendace  */}
            <div className="xl:hidden flex flex-col justify-between py-2 my-2 ">
              <div>Attendance</div>
              <div className="grid grid-cols-3 sm:grid-cols-8 lg:flex text-white">
                {studenInfo.Attendance.map((item, index) => {
                  return (
                    <div
                      className="mt-4 mx-2 px-4 rounded-xl text-lg font-bold"
                      key={index}
                      style={{
                        background: item
                          ? "rgb(34 197 94 / var(--tw-text-opacity))"
                          : "rgb(239 68 68 / var(--tw-text-opacity))",
                      }}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
            </div>

            {/*  total attendance  */}
            <div className="2xl:hidden flex flex-col sm:flex-row items-center justify-between py-2 my-2">
              <div className="mb-3"> total attendance:   {studenInfo. totalAttendance} </div>
            </div>
          </div>
        )}
      </>
    );
  });

  function toggleViewMenu(Key) {
    updateStudents((prevData) => {
      return prevData.map((studentContent) => {
        return studentContent.Code === Key
          ? { ...studentContent, View: !studentContent.View }
          : studentContent;
      });
    });
  }

  return (
    <table className="grid items-center my-9 mx-12 border-2 border-black">
      <thead className="bg-black text-white">
        <tr
          className="
           grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
           justify-between items-center text-3xl
        "
        >
          <th className="">Code</th>
          <th className="hidden sm:grid">Student Id</th>
          <th className="hidden lg:grid col-span-2">Student Name</th>
          <th className="hidden xl:grid">Attendance</th>
          <th className="hidden 2xl:grid">Total Attendance</th>
        </tr>
      </thead>
      <tbody >{StudentsBody}</tbody>
    </table>
  );
}
