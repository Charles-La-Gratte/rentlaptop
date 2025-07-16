import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <div className='flex justify-between items-center mb-5'>
        <Link to="/" className='text-xl font-semibold'>
          Home
        </Link>
        <Link to="/rent" className='text-xl font-semibold'>
          Rent
        </Link>
        <Link to="/contact" className='text-xl font-semibold'>
          Contact
        </Link>
      </div>
  );
};

export default NavBar;


