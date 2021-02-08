import React from "react";
import image from "../img/perfil.png";

function Home() {
  return (
    <>
      <div className="bg-green-400 h-screen flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center">
        <div className="bg-gray-700 rounded-full lg:w-96 md:w-72 sm:w-48 w-40 m-10 shadow-2xl transition duration-700 ease-in-out animate-bounce">
          <img src={image} alt="profile" className="rounded-full p-2" />
        </div>
        <h1 className="flex lg:text-8xl md:text-6xl sm:text-5xl text-5xl font-black text-gray-700 mb-14">
          Desarrollador web Full Stack
        </h1>
      </div>
     </>
  );
}

export default Home;
