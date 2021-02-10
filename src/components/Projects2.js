import React from 'react';
import HomePro from './HomePro';
import mern from "../img/mern-stack.png";
import { BrowserRouter } from 'react-router-dom';


export default function Projects2() {
  return (
    <div>
      <BrowserRouter>
        <HomePro></HomePro>
      </BrowserRouter>

      <div className="bg-green-400 flex flex-col justify-center items-center">
        <div className="font-bold lg:mt-16 md:mb-0 sm:mb-10 md:mt-16 sm:mt-24 sm:mb-16 mt-24 text-8xl text-gray-700 ">
          <h1>Portfolio</h1>
        </div>
        <img
          src={mern}
          alt="mongodb"
          className="lg:w-auto md:w-auto sm:w-96 w-96 hover:shadow-lg"
        />
      </div>
    </div>
  );
}

