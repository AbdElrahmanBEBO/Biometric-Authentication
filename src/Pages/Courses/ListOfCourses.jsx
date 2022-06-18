import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ListOfCourse(props) {
  return (
    <div
      className="
        grid lg:grid-cols-6 justify-between items-center rounded-xl sm:mx-14 my-9 p-6
        text-white bg-black hover:bg-black/[0.8] text-xl font-bold
      "
    >
      <div className="mb-5 sm:mb-0 text-[25px]" style={{textShadow: "2px 1px blue"}}>{props.courseName}</div>
      
      <div className="mr-5 text-[15px]">
        Code: {props.courseCode}
      </div>
      
      <div className="mr-5 text-[15px]">
        Students Number: {props.studentsNumber}
      </div>
      
      <div className="lg:col-span-2 flex justify-evenly">
        <Link
          to={`/${props.courseCode}/report`}
          className="flex justify-center py-1 px-2 sm:px-4 mr-5 my-4 lg:my-0 text-[15px] bg-green-500 hover:bg-green-400 rounded-md"
        >
          New Session
        </Link>
        <Link
          to={`/${props.courseCode}/report`}
          className="flex justify-center py-1 px-2 sm:px-4 mr-5 my-4 lg:my-0 text-[15px] bg-green-500 hover:bg-green-400 rounded-md"
        >
          Students Report
        </Link>
      </div>
      <div className="flex lg:justify-end">
        <div className="mr-5 text-[15px]">Start Date: {props.dataCreated}</div>
        <RiDeleteBin5Line className="hover:text-red-400 self-center text-2xl" />
      </div>
    </div>
  );
}
