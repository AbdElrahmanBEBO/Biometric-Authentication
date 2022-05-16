import React from "react";
import Webcam from "react-webcam";

export default function ViewCam() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState([]);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc((prev) => [...prev, imageSrc]);
  }

  let date = new Date();
  let sec = date.getSeconds();


  return (
    <div className="flex flex-col justify-center items-center m-5">
      <Webcam
        className="rounded-2xl shadow-lg shadow-black"
        audio={false}
        ref={webcamRef}
        width={1024}
        screenshotFormat="image/png"
      />

      <button
        className="bg-black text-white p-3 m-5 rounded-xl font-medium"
        onClick={() => setInterval(capture, 1500)}
      >
        Capture photo
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 overflow-auto">
        {imgSrc.map((img) => {
          return <img className="w-[200px] h-[200px] m-5" src={img} />;
        })}
      </div>
    </div>
  );
}
