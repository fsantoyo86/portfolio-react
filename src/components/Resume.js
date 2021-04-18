import React from 'react';
import image from '../img/resume.jpg'

function Resume() {
    return (
      <div className="bg-green-400 text-gray-700 md:flex mx-auto font-Jura">
        <div className="md:w-1/3 p-2 border-r-2 border-gray-700 border-dotted">
          <div className="md:fixed">
            <div className="md:block">
              <img
                className="h-40 w-40 rounded-full lg:mx-32 lg:mt-16 md:mx-32 md:mt-16 sm:mx-auto sm:mt-10 mt-10 mx-auto"
                src={image}
                alt="profile"
              />
              <div className="mb-12 text-center mt-4 justify-center items-center">
                <h1 className="text-2xl text-gray-700 font-bold">
                  Francisco Santoyo
                </h1>
                <div className="md:text-lg text-gray-700">
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-2 w-full font-Jura">
          <div className="mx-4 mb-6">
            <h1 className="mb-4 lg:text-4xl md:text-3xl sm:text-3xl text-3xl text-gray-700 font-bold">
              Resume
            </h1>
            <p className="text-lg">
              Professional with programming passion, whether it is front end or
              backend. Research qualities and problem solving. I enjoy planning
              and organizing projects. I have skills for working in teams and
              under presure and I try to find creative solutions to problems. I
              have interest in new technologies and creating new ideas.
            </p>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Skills</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-white font-medium bg-gray-700">
                  Programming Languages:
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Java
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Python
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  C#
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Ruby
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Fortran
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-white font-medium bg-gray-700">
                  Data Bases:
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  PostgreSQL
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  MySQL
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  MariaDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  MongoDB
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-white font-medium bg-gray-700">
                  Frameworks:
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Express JS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Nest JS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  React JS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Next JS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Gatsby
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Django
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Tailwind CSS
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-white font-medium bg-gray-700">
                  Mobile Apps:
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  React Native
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-white font-medium bg-gray-700">
                  Unit testing:
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Jest
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Enzyme
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-white font-medium bg-gray-700">
                  Stack:
                </span>
              </li>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  MERN
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  PERN
                </span>

                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 text-green-500 font-medium bg-gray-700">
                  Django
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
                  Maestro en Ciencias en Ingeniería Eléctrica (Opcion: Sistemas
                  Computacionales)
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
