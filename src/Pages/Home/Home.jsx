import React from "react";
import background from "../../assets/BG.jpg";

export default function Home() {
  return (
    <div
      className="    
        flex justify-center lg:justify-end items-center	text-white
        h-[calc(100vh-70px)] bg-fixed bg-cover bg-center bg-no-repeat 
      "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="m-2 lg:mr-[230px] bg-black/[0.8]">
        <p className="text-[35px] font-[cursive] font-bold ml-2">
          Welcome to..
          <br />
          Biometric Authentications App
        </p>

        <div className="home-links flex flex-col justify-center items-center mt-12">
          <a href="/SignIn">Sign In</a>
          <a href="/SignUp">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
