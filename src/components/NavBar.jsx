import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <div>
      <nav className="bg-white-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-blue-500 text-lg font-bold">RentLaptop</div>
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                //strokeLinecap="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="text-xl font-semibold text-black-300 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/rent"
              className="text-xl font-semibold text-black-300 hover:text-blue-600"
            >
              Rent
            </Link>
            <Link
              to="/contact"
              className="text-xl font-semibold text-black-300 hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              to="/Login"
              className="text-xl font-semibold text-black-300 hover:text-blue-600"
            > 
              Login   <FontAwesomeIcon icon={faSignIn} />
            </Link>
            <Link
              to="/contact"
              className="text-xl font-semibold text-black-300 hover:text-blue-600"
            >
              Sign up  <FontAwesomeIcon icon={faSignOut} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
