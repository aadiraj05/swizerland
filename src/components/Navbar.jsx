import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io"; // Search Icon
import { TbMapSearch } from "react-icons/tb"; // Map Icon
import { MdOutlineArrowDropDown } from "react-icons/md"; // Dropdown Icon
import { FaPlusSquare } from "react-icons/fa"; // Plus Icon
import { MdHelpCenter } from "react-icons/md";
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
      <ul className="flex justify-center space-x-8 py-6 px-6 text-white text-lg bg-transparent transition-colors duration-300 hover:bg-white hover:text-black group">
        {/* ✅ Switzerland with Icon between 'i' and 'z' (No extra spacing) */}
        <li className="flex items-center cursor-pointer hover:text-red-600 text-2xl">
          swi<FaPlusSquare className="text-sm text-red-600 bg-white" />zerland
        </li>

        <li className="cursor-pointer hover:text-red-600 text-xl">Destinations</li>
        <li className="cursor-pointer hover:text-red-600 text-xl">Experiences</li>
        <li className="cursor-pointer hover:text-red-600 text-xl">Accommodation</li>
        <li className="cursor-pointer hover:text-red-600 text-xl">Planning</li>

        {/* ✅ Line Divider (Turns Black When Navbar is Hovered) */}
        <li className="border-l border-white h-8 transition-colors duration-300 group-hover:border-black"></li>

        {/* Search Icon (Icon on Left) */}
        <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 text-xl">
          <IoIosSearch className="text-2xl" /> Search
        </li>

        {/* Language Dropdown (Icon on Right) */}
        <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 text-xl">
          Language <MdOutlineArrowDropDown className="text-2xl" />
        </li>

        {/* Maps Icon (Icon on Right) */}
        <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 text-xl">
          Map <TbMapSearch className="text-2xl" />
        </li>

        <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 text-xl">
            Help<MdHelpCenter className="text-xl"/>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
