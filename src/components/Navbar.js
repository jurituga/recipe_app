import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import { useState, useRef } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white py-4 px-6 mb-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          <span className="text-black">Health</span>
          <span className="text-orange-500">food</span>
        </NavLink>
        <button
          className="md:hidden focus:outline-none"
          onClick={showNavbar}
        >
          {isOpen ? (
            <FaTimes className="w-8 h-8 text-gray-500" />
          ) : (
            <FaBars className="w-8 h-8 text-gray-500" />
          )}
        </button>
        <nav
          ref={navRef}
          className={`${
            isOpen ? "block" : "hidden"
          } md:block md:flex md:items-center md:justify-between mt-4 mx-auto px-4`}
        >
          <NavLink
            to="/recipe"
            className="block my-2 text-lg font-medium text-gray-600 hover:text-gray-900 md:mx-6"
          >
            Recipe
          </NavLink>
          <NavLink
            to="/#"
            className="block my-2 text-lg font-medium text-gray-600 hover:text-gray-900 md:mx-6"
          >
            Blog
          </NavLink>
          <div className="mr-9">
            <Button className="my-2 md:mx-4" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
