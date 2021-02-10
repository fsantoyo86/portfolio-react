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
          Resumen
        </NavLink>
        <NavLink
          to="/projectsM"
          className="p-4 hover:text-gray-700 hover:bg-green-400"
        >
          Proyectos
        </NavLink>
        <NavLink
          to="/courses"
          className="p-4 hover:text-gray-700 hover:bg-green-400"
        >
          Cursos
        </NavLink>
        <NavLink
          to="/about"
          className="p-4 hover:text-gray-700 hover:bg-green-400"
        >
          Acerca De
        </NavLink>
      </div>
    );
}

export default Dropdown;
