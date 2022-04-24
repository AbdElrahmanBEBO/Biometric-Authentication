import React from "react"
import { BsList } from "react-icons/bs";

export default function Navbar() {
    return (
        //    responsive navbar by tailwindcss
        <nav className="overflow-visible flex  justify-between flex-wrap bg-black sticky top-0 text-white p-6">
            <div className="flex items-center flex-shrink-0  mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    Student Attendance
                </span>
            </div>
            <div className="block sm:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >

                    <BsList
                        className=" h-6 w-6  bg-black   "
                        // onClick={() => toggleViewMenu(studenInfo.Code)}
                    />
                </button>
            </div>
            <div className="hidden w-full block flex-grow sm:flex sm:items-center sm:w-auto " >
                <div className="text-sm lg:flex-grow">
                    <a
                        href="/home"
                        className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Home
                    </a>
                    <a
                        href="/reports"
                        className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Reports
                    </a>
                    <a
                        href="/SignUp"
                        className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        SignUp
                    </a>
                    <a
                        href="/SignIn"
                        className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        SignIn
                    </a>
                </div>
            </div>
        </nav>
    )
}