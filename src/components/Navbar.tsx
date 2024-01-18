
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-dark p-6">
      <div className="container mx-auto flex items-center justify-between px-20">
        <Link to={"/"}>
          {" "}
          <img
            src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
            alt="Logo"
            className="h-8"
          />
        </Link>

        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex-grow"></div>

        <ul className="hidden md:flex space-x-4 mr-6 ">
          <li>
            <Link
              to="/"
              className="text-white hover:text-teal-200 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teal-200">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teal-200">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teal-200">
              About
            </a>
          </li>
        </ul>

        <ul className="hidden md:flex space-x-4 bg-teal-600 p-2 rounded">
          <li>
            <Link to="/booking" className="text-white">
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
