import React from "react";
import Webcam from "react-webcam";

export default function ViewCam() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState([]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc((prev) => [...prev, imageSrc]);
  }, [webcamRef, setImgSrc]);

  return (
    <div className="flex flex-col justify-center items-center m-9 p-9">
      <Webcam
        audio={false}
        ref={webcamRef}
        width={900}
        screenshotFormat="image/jpeg"
      />

      <button
        className="bg-[aqua] p-5 m-5 rounded-xl"
        onClick={() => setInterval(capture, 2000)}
      >
        Capture photo
      </button>

      <div className="grid grid-cols-5 overflow-auto">
        {imgSrc.map((img) => {
          return <img className="w-20 h-20 m-5" src={img} />;
        })}
      </div>
    </div>
  );
}
