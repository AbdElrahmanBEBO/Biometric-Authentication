import { decode, encode } from "base64-arraybuffer";
import React from "react";
import Webcam from "react-webcam";

export default function ViewCam() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState([]);
  let file;
  const capture = (numberOfShots = 1, delayPerSecound = 0) => {
    const setTimeInterval = setInterval(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      
      console.log(imageSrc)
      // const imageBuffer = decode(imageSrc);
      setImgSrc((prev) => [...prev, imageSrc]);
      while (--numberOfShots === 0) window.clearInterval(setTimeInterval);
    }, delayPerSecound * 1000);
  };

  const sentShoots = async () => {
    capture(5,2);

    // const file = imgSrc[0];
    // const fileName = file.name;
    // const type = file.type;

    // const response = await fetch(
    //   `https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/createpresignedurl/${fileName}?filetype=${type}`
    // );
    // const presignedUrl = await response.json();

    // fetch(presignedUrl.postURL, {
    //   method: "PUT",
    //   body: file,
    //   Headers: {
    //     ContentType: type,
    //   },
    // }).then((res) => {
    //   if (res.statusText === "OK") {
    //     res.image = presignedUrl.getURL;
    //   }
    // });
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
        Capture photo
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 overflow-auto">
        {imgSrc.map((img, index) => {
          return (
            <img
              className="w-[200px] h-[200px] m-5 rounded-md"
              key={index}
              src={img}
            />
          );
        })}
      </div>
    </div>
  );
}

