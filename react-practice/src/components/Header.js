import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="bg-sky-800 h-fit flex flex-col md:flex-row box-border px-1 py-2 text-white text-4xl font-bold m-auto sticky top-0">
      <div className="flex-1 md:flex-[0.3_1_0%] flex flex-row items-center justify-start md:justify-center">
        ReactJS.org
      </div>
      <div className="hidden md:flex flex-1 md:flex[0.7_1_0%] flex-col md:flex-row justify-center items-start md:items-center md:justify-end">
        <a href="/" className="md:px-4 text-xl font-semibold text-white hover:text-sky-500 transition ease-in-out">
          Home
        </a>
        <a href="/" className="md:px-4 text-xl font-semibold text-white hover:text-sky-500 transition ease-in-out">
          Products
        </a>
        <a href="/" className="md:px-4 text-xl font-semibold text-white hover:text-sky-500 transition ease-in-out">
          Pricing
        </a>
      </div>
    </div>
  );
}

export default Header;
