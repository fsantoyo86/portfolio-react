import React from 'react';
import { Data } from '../../Datos/DatosMern';

function Mern() {
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 bg-green-400">
        {Data.map((db) => (
          <div className="p-8 container text-green-500">
            <div className="shadow-xl rounded-lg">
              <div className="h-44 bg-project1 bg-gray-200 bg-cover bg-center rounded-t-lg items-end flex justify-center"></div>
              <div className="bg-gray-100 text-green-500 rounded-b-lg px-8">
                <div className="pt-8 pb-8 text-gray-700">
                  <h1 className="text-2xl font-bold">{db.title}</h1>
                  <p className="text-sm">From hyrule</p>
                  <p className="mt-6 object-contain">{db.overview}</p>
                  <div className="flex justify-around text-gray-700 font-bold mt-8">
                    <a
                      className="p-4 rounded-lg hover:bg-gray-700 hover:text-white"
                      href="http://google.com"
                      target="__blank"
                    >
                      Sitio
                    </a>
                    <a
                      className="p-4 rounded-lg hover:bg-gray-700 hover:text-white"
                      href="http://google.com"
                      target="__blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    );
}

export default Mern;
