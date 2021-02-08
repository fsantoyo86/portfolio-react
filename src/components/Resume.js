import React from 'react';
import image from '../img/resume.jpg'

function Resume() {
    return (
      <div className="bg-green-400 text-gray-700 md:flex mx-auto font-mono">
        <div className="md:w-1/2 p-2 border-r-2 border-gray-700 border-dotted">
          <div className="md:fixed">
            <div className="md:block">
              <img
                className="h-32 w-32 rounded-full lg:mx-36 lg:mt-16 md:mx-36 md:mt-16 sm:mx-auto sm:mt-10 mt-10 mx-auto"
                src={image}
                alt="profile"
              />
              <div className="mb-12 text-center mt-4 justify-center items-center">
                <h1 className="text-2xl text-gray-700 font-bold">
                  Francisco Santoyo
                </h1>
                <div className="md:text-lg text-gray-700">
                  Desarrollador web Full Stack
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-2 w-full font-mono">
          <div className="mx-4 mb-6">
            <h1 className="mb-4 lg:text-4xl md:text-3xl sm:text-3xl text-3xl text-gray-700 font-bold">
              Resumen
            </h1>
            <p className="text-lg">
              Profesional con pasión por la programación, el front end y el análisis de datos. Capacidad
              de investigación y resolución de problemas. Gusto por la planeación y organización de proyectos. 
              Habilidad para trabajar bajo presión y encontrar soluciones creativas a los problemas. Interés en nuevas
              tecnologías y la creación de nuevas ideas.
            </p>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Skills</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  ReactJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  NodeJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  MongoDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  ExpressJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  NextJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Django python
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2  text-green-500 font-medium bg-gray-700">
                  Mysql/MariaDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Tailwind css
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Python
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Flutter
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  React Native
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Python
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Ruby
                </span>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 lg:text-3xl md:text-2xl sm:text-2xl text-2xl text-gray-700 font-bold">
              Estudios
            </h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Maestro en Ciencias en Ingeniería Eléctrica (Opcion: Sistemas Computacionales)
                </h2>
                <div className="mt-1">
                  <div>
                    <small className="text-sm text-gray-600">
                      Septiembre 2010 - Marzo 2012
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Licenciatura en Ciencias Físico-Matemáticas
                </h2>
                <div className="mt-1">
                  <div>
                    <small className="text-sm text-gray-600">
                      Septiembre 2014 - Febrero 2019
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Licenciatura en Informática Administrativa
                </h2>
                <div className="mt-1">
                  <div>
                    <small className="text-sm text-gray-600">
                      Septiembre 2014 - Febrero 2009
                    </small>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Resume;
