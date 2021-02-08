import React from 'react';
import {NavLink} from 'react-router-dom';

function Dropdown({isOpen,toggle}) {
    return (
      <div
        className={
          isOpen
            ? "grid grid-rows-4 text-center items-center text-green-400 bg-gray-700"
            : "hidden"
        }
        onClick={toggle}
      >
        <NavLink
          to="/"
          exact
          className="p-4 hover:text-gray-700 hover:bg-green-400"
        >
          Home
        </NavLink>
        <NavLink
          to="/resume"
          className="p-4 hover:text-gray-700 hover:bg-green-400"
        >
          Resume
        </NavLink>
        <NavLink
          to="/projects"
          className="p-4 hover:text-gray-700 hover:bg-green-400"
        >
          Projects
        </NavLink>
        <NavLink
          to="/courses"
          className="p-4 hover:text-gray-700 hover:bg-green-400"
        >
          Courses
        </NavLink>
        <NavLink
          to="/about"
          className="p-4 hover:text-gray-700 hover:bg-green-400"
        >
          About Me
        </NavLink>
      </div>
    );
}

export default Dropdown;
