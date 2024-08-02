import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className="bg-zinc-800 border-b-2 p-4">
      <div className="flex justify-end items-center">
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } font-bold align-middle justify-center gap-10 md:flex md:items-center md:space-x-4`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block text-2xl py-2 pr-4 pl-3 duration-200
                  ${
                    isActive ? "text-green-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/Skills"
          className={({ isActive }) =>
            `block text-2xl py-2 pr-4 pl-3 duration-200
                  ${
                    isActive ? "text-green-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            `block  text-2xl py-2 pr-4 pl-3 duration-200
                  ${
                    isActive ? "text-green-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            `block  text-2xl py-2 pr-4 pl-3 duration-200
                  ${
                    isActive ? "text-green-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
