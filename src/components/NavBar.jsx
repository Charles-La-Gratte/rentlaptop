import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="flex justify-between items-center mb-5">
        <Link to="/" className="text-xl font-semibold">
          Home
        </Link>
        <Link to="/" className="text-xl font-semibold">
          Home
        </Link>
        <Link to="/" className="text-xl font-semibold">
          Home
        </Link>
      </header>
    </div>
  );
};

export default NavBar;
