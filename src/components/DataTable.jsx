import React from "react"

import Students from "./Students"
import { MdFormatListBulleted} from 'react-icons/md';

export default function DataTable() {
  
  const[StudentsData, updateStudents] = React.useState(Students);

  function toggleViewMenu(Key){
    updateStudents((prevData) => {
      return prevData.map((studentContent) => {
        return (studentContent.Code === Key) ? {...studentContent, View:!studentContent.View} : studentContent
      })
    })
  }

  const StudentsView = (
    StudentsData.map(studenInfo => {
      return (
        <>
          <tr className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
            text-3xl justify-between items-center
          ">
            <td>
              <MdFormatListBulleted 
                className="bg-green-400 rounded-lg p-1 text-4xl mr-4 2xl:hidden"   
                onClick={() => toggleViewMenu(studenInfo.Code)}           
              />
              {studenInfo.Code}
            </td>

            <td className="hidden sm:grid">{studenInfo.StudentId}</td>
            <td className="hidden lg:grid col-span-2 studentName">{studenInfo.StudnetName}</td>            
            <td className="hidden xl:grid" dir="rtl">{studenInfo.Attendance}</td>
            <td className="hidden 2xl:grid">{studenInfo.Participation}</td>
          </tr>
          
          {studenInfo.View && (
            <div className="flex flex-col text-4xl p-3 m-3 border-green-400 border-4">
              <div className="sm:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
                <div>StudentId </div>
                {studenInfo.StudentId}
                </div>
              <div className="lg:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
                <div>StudentName</div>
                <div dir="rtl">{studenInfo.StudnetName}</div>
                </div>      
              <div className="xl:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
                <div>Attendance</div>
                {studenInfo.Attendance}
                </div>
              <div className="2xl:hidden flex flex-col sm:flex-row justify-between py-2 my-2 ">
                <div>Participation </div>
                {studenInfo.Participation}
                </div>
            </div>
          )}
        </>
      )
    })
  )

  return (
    <table className="grid items-center my-9 mx-12 border-2 border-black">
      <thead className="bg-black text-white">
        <tr className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
          justify-between items-center text-3xl
        ">
          <th className="">Code</th>
          <th className="hidden sm:grid">Student Id</th>
          <th className="hidden lg:grid col-span-2">Student Name</th>
          <th className="hidden xl:grid">Attendance</th>
          <th className="hidden 2xl:grid">Participation</th>
        </tr>
      </thead>

      <tbody>
        {StudentsView}
      </tbody>
    </table>
  )

}