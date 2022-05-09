import React from "react";
import Webcam from "react-webcam";

export default function ViewCam() { 
    return (
        <div className="flex justify-center items-center m-9 p-9">
            <Webcam />
        </div>
    )
}