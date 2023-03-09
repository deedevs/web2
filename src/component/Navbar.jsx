import React from "react";
import "../component/header.css";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="md:w-[100%] md:bg-bg-main   md:py-1 md:px-2 md:flex md:space-x-6 md:items-center md:justify-between md:h-11 md:text-white mr-16"
    >
      <h1 className="md:text-white ml-16">Welcome to my Financial services</h1>
      <div className="md:text-white space-x-8">
        <i className="fa-solid fa-phone md:text-white"></i>
        <span className="md:ml-[-40px] md:relative md:right-8">
          (220) 3457768
        </span>
      </div>
    </div>
  );
};

export default Navbar;
