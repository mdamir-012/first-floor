import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <header className="w-full fixed top-0 z-50 bg-gray-800 opacity-90">
        <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img
                className="w-28 rounded-full"
                src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png"
                alt="logo"
              />
            </a>
            <div className="ml-2">
              <button className="text-white text-lg" onClick={toggleDropdown}>
              <IoIosArrowDropdown />
              </button>
              {dropdownOpen && (
                <ul className="absolute  mt-2 w-32  text-black shadow-lg">
                  <li className="px-4 py-2 hover:bg-gray-200 ">
                    <Link to="/mysore">Mysore</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/bengaluru">Bengaluru</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ul className="hidden md:flex text-white gap-6 mr-4">
              <li>
                <Link className="text-lg font-normal text-white" to="/">
                  Buy
                </Link>
              </li>
              <li>
                <Link className="text-lg font-normal  text-white" to="/courselist">
                  Rent
                </Link>
              </li>
              <li>
                <Link className="text-lg font-normal  text-white" to="/">
                  Sell
                </Link>
              </li>
              <li>
                <Link className="text-lg font-normal  text-white" to="/">
                  PG
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <button className="text-lg text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-700">
               Post Property
              </button>
              <button className="text-lg text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-900">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
