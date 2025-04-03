import React, { useState, useEffect } from "react";
import { MdOutlineHome } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiFilmSpool } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";
import { RiContactsBook3Line } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi2";


import Logo1 from "/src/assets/Logo1.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowNavbar(true), 2000); // Show navbar after video starts
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-500 ${
        showNavbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <ul className="flex justify-start gap-15 py-6 px-10 text-white text-lg bg-transparent transition-colors duration-300 hover:bg-white hover:text-black group">
        
        {/* Logo */}
        <li className="flex items-center cursor-pointer hover:text-red-600 text-2xl ml-10">
          <img src={Logo1} alt="logo" className="h-14 size-30" /> {/* Increased size */}
        </li>

        {/* Menu Items with Icons */}
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          <MdOutlineHome className="mr-2 text-2xl" /> Home
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          <FaMapLocationDot className="mr-2 text-2xl" /> Shooting Location
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          <GiFilmSpool className="mr-2 text-2xl" /> Film Club
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          <TfiGallery className="mr-2 text-2xl" /> Gallery
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          <RiContactsBook3Line className="mr-2 text-2xl" /> Contact Us
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          <HiOutlineInformationCircle className="mr-2 text-2xl" /> About Us
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
