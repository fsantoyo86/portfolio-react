import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar({toggle}) {
    return (
      <nav
        className="flex justify-between sticky top-0 z-50 items-center h-16 bg-gray-700 text-green-400 relative shadow-lg font-Jura"
        role="navigation"
      >
        <NavLink to="/" className="flex items-center pl-8">
          <img className="w-8 mr-3" src={process.env.PUBLIC_URL + './img/hacker.png'} alt="Portfolio" /> fsantoyo
        </NavLink>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
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
          <NavLink to="/" exact className="p-4 hover:text-white">
            Home
          </NavLink>
          <NavLink to="/resume" className="p-4 hover:text-white">
            Resume
          </NavLink>
          <NavLink to="/projectsM" exact className="p-4 hover:text-white">
            Projects
          </NavLink>
          <NavLink to="/courses" className="p-4 hover:text-white">
            Courses
          </NavLink>
          <NavLink to="/about" className="p-4 hover:text-white">
            About
          </NavLink>
        </div>
      </nav>
    );
}

export default Navbar;
