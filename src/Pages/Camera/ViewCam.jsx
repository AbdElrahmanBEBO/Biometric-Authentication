import React from "react";
import Webcam from "react-webcam";

export default function ViewCam() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState([]);

  const capture = (numberOfShots = 1, delayPerSecound = 0) => {
    const setTimeInterval = setInterval(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc((prev) => [...prev, imageSrc]);
      while (--numberOfShots === 0) window.clearInterval(setTimeInterval);
    }, delayPerSecound * 1000);
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
        onClick={() => capture(5,2)}
      >
        Capture photo
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 overflow-auto">
        {imgSrc.map((img) => {
          return <img className="w-[200px] h-[200px] m-5 rounded-md" src={img} />;
        })}
      </div>
    </div>
  );
}
