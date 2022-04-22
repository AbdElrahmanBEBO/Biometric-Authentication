import React from "react";

import Students from "./Students";
import { MdFormatListBulleted } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";

export default function DataTable() {
  const [StudentsData, updateStudents] = React.useState(Students);

  function toggleViewMenu(Key) {
    updateStudents((prevData) => {
      return prevData.map((studentContent) => {
        return studentContent.Code === Key
          ? { ...studentContent, View: !studentContent.View }
          : studentContent;
      });
    });
  }



  const StudentsView = StudentsData.map((studenInfo) => {
    return (
      <>
        <tr
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
            text-3xl justify-between items-center
          "
        >
          <td className="flex justify-between">
            <div className="flex">
              <MdFormatListBulleted
                className="bg-black rounded-lg p-1 text-4xl text-white font-black mr-4 2xl:hidden"
                onClick={() => toggleViewMenu(studenInfo.Code)}
              />
              {studenInfo.Code}
            </div>
            {studenInfo.Attendance[studenInfo.lastAttend - 1] && (
              <BsCheckCircleFill className="text-green-500" />
            )}
          </td>

          <td className="hidden sm:grid">{studenInfo.StudentId}</td>
          <td className="hidden lg:grid col-span-2 overflowX" dir="rtl">
            {studenInfo.StudnetName}
          </td>
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
          <td className="hidden 2xl:flex 2xl:justify-center">
            <input
              type="text"
              style={{ width: "230px" }}
              className="py-1 px-3 border-black border-1"
              value={studenInfo.Participation}
            />
          </td>
        </tr>

        {studenInfo.View && (
          <div className="flex flex-col text-4xl p-3 m-3 border-green-400 border-4 2xl:hidden">
            <div className="sm:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
              <div>StudentId </div>
              {studenInfo.StudentId}
            </div>
            <div className="lg:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
              <div>StudentName</div>
              <div dir="rtl">{studenInfo.StudnetName}</div>
            </div>
            <div className="xl:hidden flex flex-col justify-between py-2 my-2 ">
              <div>Attendance</div>

              <div className="grid grid-cols-3 sm:flex text-white">
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
            <div className="2xl:hidden flex flex-col sm:flex-row items-center justify-between py-2 my-2 ">
              <div className="mb-3">Participation </div>
              <input
                style={{ width: "200px" }}
                className="py-1 px-3 border-black border-1"
                type="text"
                value={studenInfo.Participation}
              />
            </div>
          </div>
        )}
      </>
    );
  });

  return (
    <table className="grid items-center my-9 mx-12 border-2 border-black">
      <thead className="bg-black text-white sticky top-0">
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
          <th className="hidden 2xl:grid">Participation</th>
        </tr>
      </thead>

      <tbody>{StudentsView}</tbody>
    </table>
  );
}
