import React from 'react';
import {NavLink} from 'react-router-dom';

function NavbarNew({toggleY}) {
    return (
      <nav
        className="flex lg:justify-center md:justify-center sm:justify-between justify-between items-center h-14 bg-gray-300 text-gray-700 relative shadow-lg font-mono"
        role="navigation"
      >
        <div></div>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggleY}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <NavLink
            to="/mern"
            className="p-4 hover:text-white hover:bg-gray-700 rounded-lg"
            activeClassName="bg-gray-700 text-white"
          >
            MERN
          </NavLink>

          <NavLink
            to="/react"
            className="p-4 hover:text-white hover:bg-gray-700 rounded-lg"
            activeClassName="bg-gray-700 text-white"
          >
            React
          </NavLink>
          <NavLink
            to="/next"
            className="p-4 hover:text-white hover:bg-gray-700 rounded-lg"
            activeClassName="bg-gray-700 text-white"
          >
            Next
          </NavLink>
          <NavLink
            to="/reactnative"
            className="p-4 hover:text-white hover:bg-gray-700 rounded-lg"
            activeClassName="bg-gray-700 text-white"
          >
            ReactNative
          </NavLink>
          <NavLink
            to="/javascript"
            className="p-4 hover:text-white hover:bg-gray-700 rounded-lg"
            activeClassName="bg-gray-700 text-white"
          >
            JavaScript
          </NavLink>
        </div>
      </nav>
    );
}

export default NavbarNew;
