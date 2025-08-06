import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import iconCart from '../assets/images/iconCart.png';
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../stores/cart";

const NavBar = () => {
  const [totalQuantity, setTotalQuantity] = useState (0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts])
  const handleOpenTabCard = () => {
    dispatch(toggleStatusTab());
  }
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
              to="/contact"
              className="text-xl font-semibold text-black-300 hover:text-blue-600"
            >
              Sign up <FontAwesomeIcon />
            </Link>
            <Link
              to="/Login"
              className="text-xl font-semibold text-black-300 hover:text-blue-600"
            >
              Login <FontAwesomeIcon icon={faSignIn} />
            </Link>
            <div
              className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative"
              onClick={handleOpenTabCard}
            >
              <img src={iconCart} alt="" className="w-6" />
              <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                {totalQuantity}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
