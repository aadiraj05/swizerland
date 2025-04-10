import React, { useState, useEffect } from "react";
import { MdOutlineHome } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiFilmSpool } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";
import { RiContactsBook3Line } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi2";

import Logo1 from "/src/assets/Logo1.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false); // for fade-in
  const [showOnScroll, setShowOnScroll] = useState(true); // for scroll up/down
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Initial fade-in after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll direction logic
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 0) {
      setHasScrolled(true);
    }

    if (hasScrolled) {
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowOnScroll(false);
      } else {
        // Scrolling up
        setShowOnScroll(true);
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasScrolled]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "opacity-100" : "opacity-0"
      } ${showOnScroll ? "translate-y-0" : "-translate-y-full"}`}
    >
      <ul className="flex justify-start gap-15 py-6 px-10 text-white text-lg bg-transparent transition-colors duration-300 hover:bg-white hover:text-black group">
        
        {/* Logo */}
        <li className="flex items-center cursor-pointer hover:text-red-600 text-2xl ml-10">
          <img src={Logo1} alt="logo" className="h-14 size-30" />
        </li>

        {/* Menu Items */}
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          Home
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          Shooting Location
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          Film Club
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          Gallery
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          Contact Us
        </li>
        <li className="flex items-center cursor-pointer hover:text-red-600 text-xl font-semibold">
          About Us
        </li>
     </ul>
    </nav>
  );
};

export default Navbar;
