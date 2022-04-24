import React from "react"
import background from "../../assets/BG.jpg"

import Students from "./studentData";

export default function SignIn() {
    return (
        <div className=" 
        bebo
        flex flex-col justify-center items-end	
        bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
             backgroundImage: "url("+background+")" 
            }}
        >
            <div className=" w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Code
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="code"
                            type="number"
                            pattern="([1|2][0-9](27|28)[0-9]{3})"
                            placeholder="Code"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-black hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={Sign}
                            
                        >
                            
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// SignIn function
function Sign() {
    var code = document.getElementById("code").value;
    var mach = code.match(/([1|2][0-9](27|28)[0-9]{3})/);
    var password = document.getElementById("password").value;
    // check if the code as pattern
    if (code === "1827057" && password === "admin" &&mach) {
        alert("Welcome Admin");
        window.location.href = "/reports";
    }
    else if (code === "admin" && password !== "admin") {
        alert("error password");
        
    }
    else {
        alert("un signed up");
    }
}