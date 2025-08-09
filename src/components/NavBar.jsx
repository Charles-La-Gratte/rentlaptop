import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../stores/cart";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCard = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative">
      {/* Brand */}
      <div className="text-blue-500 text-lg font-bold">RentLaptop</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        <Link to="/" className="text-lg font-semibold text-gray-600 hover:text-blue-600">
          Home
        </Link>
        <Link to="/rent" className="text-lg font-semibold text-gray-600 hover:text-blue-600">
          Rent
        </Link>
        <Link to="/signup" className="text-lg font-semibold text-gray-600 hover:text-blue-600">
          Sign Up
        </Link>
        <Link to="/login" className="text-lg font-semibold text-gray-600 hover:text-blue-600">
          Login
        </Link>
      </nav>

      {/* Cart Icon */}
      <div
        className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer"
        onClick={handleOpenTabCard}
      >
        <img src={iconCart} alt="Cart" className="w-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
          {totalQuantity}
        </span>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-2xl text-gray-600 ml-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden z-50">
          <Link
            to="/"
            className="py-2 text-lg font-semibold text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/rent"
            className="py-2 text-lg font-semibold text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Rent
          </Link>
          <Link
            to="/signup"
            className="py-2 text-lg font-semibold text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="py-2 text-lg font-semibold text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
