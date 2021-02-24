import React from 'react';
import {NavLink} from 'react-router-dom';

function DropdownPro({isOpenY,toggleY}) {
    return (
      <div
        className={
          isOpenY
            ? "grid grid-rows-4 text-center items-center text-gray-700 bg-gray-300"
            : "hidden"
        }
        onClick={toggleY}
      >
        <NavLink
          to="/mern"
          className="p-4 hover:text-white hover:bg-gray-700"
        >
          MERN
        </NavLink>

        <NavLink
          to="/react"
          className="p-4 hover:text-white hover:bg-gray-700"
        >
          React
        </NavLink>
        <NavLink 
          to="/next"
          className="p-4 hover:text-white hover:bg-gray-700"
        >
          Next
        </NavLink>
        <NavLink
          to="/reactnative"
          className="p-4 hover:text-white hover:bg-gray-700"
        >
          ReactNative
        </NavLink>
        <NavLink
          to="/javascript"
          className="p-4 hover:text-white hover:bg-gray-700"
        >
          JavaScript
        </NavLink>
      </div>
    );
}

export default DropdownPro;
