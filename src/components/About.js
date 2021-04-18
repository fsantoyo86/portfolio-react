import React from "react";
import { Link } from "react-router-dom";
import image from '../img/perfil.png'

function About() {
  return (
    <div className="bg-green-400 flex font-Jura z-10 justify-center items-center w-screen h-screen">
      <div className="w-2/3 border border-gray-700 bg-gray-700 text-gray-50">
        <div className="w-full">
          <img
            src="/img/banner.png"
            alt="profile"
            className="lg:h-64 w-full md:h-64 sm:h-32 h-32"
          />
        </div>

        <div className="flex items-center p-4">
          <div className="relative flex flex-col items-center w-full">
            <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400 min-w-max -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
              <img
                className="h-24 w-24 md rounded-full relative"
                src={image}
                alt="Profile"
              />
              <div className="absolute"></div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
              <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                Francisco Santoyo
              </span>
              <span class="text-md whitespace-nowrap text-gray-100">
                Morelia, Michoacan, México
              </span>
              <span class="text-md whitespace-nowrap text-gray-100">
                fa.santoyo.valdez.86@gmail.com
              </span>
              <p className="text-sm text-gray-200 w-4/5 p-5">
                I like manga, anime, I love going to the movies and watch
                series. I enjoy playing and watching sports in general but my
                heart is with football. I also love reading books, whether it
                they are thrillers, fantasy, fiction or romance.
              </p>
              <div className="py-2 flex space-x-2">
                <button className="justify-center whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-400 text-purple-400 hover:border-purple-800 hover:border-purple-500 px-4 py-1 flex items-center hover:shadow-lg">
                  <Link to="/">
                    <span class="mr-2"></span>Home<span class="ml-2"></span>
                  </Link>
                </button>
                <Link to="projectsM">
                  <button class="flex justify-center whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                    <span class="mr-2">
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 32 32"
                        class="fill-current text-red-100"
                      >
                        <path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path>
                      </svg>
                    </span>
                    Projects <span class="ml-2"></span>
                  </button>
                </Link>
              </div>
              <div className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                <span className="text-center px-2">
                  <a
                    className="link"
                    href="http://facebook.com/francisco.santoyo.982292"
                    data-tippy-content="@facebook_handle"
                    target="__blank"
                  >
                    <svg
                      className="h-6 fill-current text-white hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                    </svg>
                  </a>
                </span>
                <span class="text-center px-2">
                  <a
                    className="link"
                    href="http://twitter.com/FSantoyo4?s=09"
                    data-tippy-content="@twitter_handle"
                  >
                    <svg
                      className="h-6 fill-current text-white hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      target="__blank"
                    >
                      <title>Twitter</title>
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                </span>
                <span class="text-center px-2">
                  <a
                    className="link"
                    href="http://github.com/fsantoyo86"
                    data-tippy-content="@github_handle"
                    target="__blank"
                  >
                    <svg
                      className="h-6 fill-current text-white hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
