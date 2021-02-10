import React from "react";
import { Data } from "../../Datos/DatosNext";
import image from "../../img/12.jpg";


function Next(){
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 bg-green-400 justify-items-center">
        {Data.map((db) => (
          <div className="max-w-xs bg-white rounded-xl overflow-hidden shadow-lg mx-5 my-5">
            <img src={image} alt="Proyecto" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{db.title}</div>
              <p className="text-gray-darker text-base">{db.overview}</p>
            </div>
            <div className="px-6 py-4 text-blue-500 font-bold">
              <a
                className="p-3 rounded-lg hover:bg-gray-700 hover:text-white"
                href="https://book-store-fsantoyo.netlify.app/"
                target="__blank"
              >
                Sitio Web ->
              </a>
              <a
                className="p-3 rounded-lg hover:bg-gray-700 hover:text-white"
                href="https://github.com/fsantoyo86/book-store"
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
export default Next;