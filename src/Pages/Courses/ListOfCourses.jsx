import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ListOfCourse(props) {
  return (
    <div
      className="
        grid lg:grid-cols-5 justify-between items-center rounded-xl sm:mx-14 my-9 p-6
        text-white bg-black hover:bg-black/[0.8] text-xl font-bold
      "
    >
      <h1>{props.courseName}</h1>
      <div className="mr-5 text-[15px]">Code: {props.courseCode}</div>
      <div className="mr-5 text-[15px]">
        Students Number: {props.studentsNumber}
      </div>
      <Link
        to={`/${props.courseCode}/report`}
        className="flex justify-center p-1 mr-5 my-4 lg:my-0 text-[15px] bg-green-500 rounded-md"
      >
        Students Report
      </Link>
      <div className="flex justify-end">
        <div className="mr-5 text-[15px]">Created at: {props.dataCreated}</div>
        <RiDeleteBin5Line className="hover:text-red-400 self-center text-2xl" />
      </div>
    </div>
  );
}
