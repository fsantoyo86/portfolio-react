import React from "react";
import { Data } from "../Datos/DatosFull";


function Mern(){
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 bg-green-400 justify-items-center">
        {Data.map((db) => (
          <div className="font-Jura max-w-xs bg-white rounded-sm overflow-hidden shadow-lg mx-5 my-5">
            <img src={db.image} alt="Proyecto" className="lg:w-auto md:w-auto sm:w-auto w-auto h-56" />
            <div className="px-6 py-4">
              <div className="border-b-solid border-b-2 border-gray-200 pb-1 font-bold text-xl mb-2">{db.title}</div>
              <p className="text-gray-darker text-base">{db.overview}</p>
              <p className="mt-2 text-red-600 text-base">
                Technology used: {db.tec}
              </p>
            </div>
            <div className="px-6 pt-4 pb-3 text-blue-500 font-bold">
              <a
                className="p-3 rounded-lg hover:bg-gray-700 hover:text-white"
                href={db.sitio}
                target="__blank"
              >
                Sitio Web ->
              </a>
              <a
                className="p-3 rounded-lg hover:bg-gray-700 hover:text-white"
                href={db.github}
                target="__blank"
              >
                Github ->
              </a>
            </div>
          </div>
        ))}
      </div>
    );
}
export default Mern;