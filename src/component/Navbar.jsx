import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/shareeLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <FontAwesomeIcon icon={faArrowLeft} className="text-white text-2xl" />
        <img src={logo} alt="logo" />

        <button onClick={toggleMenu} className="text-white text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col space-y-2 mt-4">
          <a href="#home" className="text-white">
            Homess
          </a>
          <a href="#services" className="text-white">
            Services
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
