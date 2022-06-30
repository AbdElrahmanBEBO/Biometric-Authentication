import { decode, encode } from "base64-arraybuffer";
import React from "react";
import Webcam from "react-webcam";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ViewCam() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState([]);
  const { courseID } = useParams();

  const [isTakingAttendance, setIsTakingAttendance] = useState(false);

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  //Usage example:

  const takeAttendanceRandomly = () => {
    if (!isTakingAttendance) {
      // const intervalKey = setInterval(async () => {
      //   const randomNumber = Math.random() * 100;
      //   if (randomNumber > 75) {
      //     // take the shots
      //     await capture(5);
      //     clearInterval(intervalKey);
      //   }
      //   console.log(randomNumber, "from random number");
      // }, 5000);
      capture(1);
      console.log("captured");
    }
  };

  const capture = async (numberOfShots = 1, delayPerSecound = 0) => {
    // const setTimeInterval = setInterval(async () => {
    //   console.log("from set interval");
    //   const imageSrc = webcamRef.current.getScreenshot();
    //   var file = dataURLtoFile(imageSrc, `${uuidv4()}.png`);
    //   const getURL = await saveFileToS3Bucket(file);
    //   console.log("image saved to s3 successfully", getURL);
    //   console.log(getURL, "from the image of the screen Shot");
    //   const res = await axios.post(
    //     "http://localhost:8080/:courseID/take-attendance",
    //     {
    //       courseID,
    //       lectureImageURL: getURL,
    //     }
    //   );
    //   console.log(res.data);
    //   // now you have the getURL
    //   // we need it to be sent to the server
    //   setImgSrc(imageSrc);
    //   while (--numberOfShots === 0) window.clearInterval(setTimeInterval);
    // }, delayPerSecound * 1000);
    console.log("from capturing");
    const imageSrc = webcamRef.current.getScreenshot();
    var file = dataURLtoFile(imageSrc, `${uuidv4()}.png`);
    const getURL = await saveFileToS3Bucket(file);
    console.log("image saved to s3 successfully", getURL);
    console.log(getURL, "from the image of the screen Shot");
    const res = await axios.post(
      `http://localhost:8080/${courseID}/take-attendance`,
      {
        courseID,
        lectureImageURL: getURL,
      }
    );
    console.log(res.data);
    // now you have the getURL
    // we need it to be sent to the server
    setImgSrc(imageSrc);
  };

  const saveFileToS3Bucket = async (file) => {
    console.log("from saving file");
    const fileName = file.name;
    const type = file.type;
    const response = await fetch(
      `https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/createpresignedurl/${fileName}?filetype=${type}`
    );
    const presignedUrl = await response.json();
    const uploadImageResponse = await fetch(presignedUrl.postURL, {
      method: "PUT",
      body: file,
      Headers: {
        ContentType: type,
      },
    });
    if (uploadImageResponse.statusText === "OK") {
      console.log("image uploaded sucessfully to ", presignedUrl.getURL);
      return presignedUrl.getURL;
    }
  };

  const sentShoots = async () => {
    setIsTakingAttendance(true);
    takeAttendanceRandomly();

    // const file = imgSrc[0];
  };

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <Webcam
        className="rounded-2xl shadow-lg shadow-black"
        audio={false}
        ref={webcamRef}
        width={900}
        screenshotFormat="image/png"
      />

      <button
        className="bg-black text-white p-3 m-5 rounded-xl font-medium"
        onClick={() => sentShoots()}
      >
        Take Attendance
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 overflow-auto"></div>
    </div>
  );
}
