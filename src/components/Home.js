import React from "react";
import mern from "../img/mern-stack.png"

function Home() {
  return (
    <>
      <div className="bg-green-400 h-screen flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center">
        <div className="bg-gray-700 rounded-full lg:w-96 md:w-72 sm:w-48 w-40 m-10 shadow-2xl transition duration-700 ease-in-out animate-bounce">
          <img
            src="/img/perfil2.jpg"
            alt="profile"
            className="rounded-full p-2"
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <h1 className=" l:text-8xl md:text-7xl text-center sm:text-5xl text-5xl font-Jura font-black text-gray-700 lg:mt-10 md:mt-10 sm:mt-5 mt-5">
            Full Stack Developer
          </h1>
          <img src={mern} alt="mern" className="w-4/5 justify-self-center" />
        </div>
      </div>
    </>
  );
}

export default Home;
