import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="bg-sky-800 h-fit flex flex-col md:flex-row box-border px-1 py-2 text-white text-4xl font-bold m-auto">
      <div className="flex-1 md:flex-[0.3_1_0%] flex flex-row itmes-center">
        ReactJS.org
      </div>
      <div className="flex flex-1 md:flex[0.7_1_0%] flex-col md:flex-row justify-center items-start ms:items-center md:justify-end">
        <a href="#" className="md:px-4 text-xl font-semibold text-white">
          Home
        </a>
        <a href="#" className="md:px-4 text-xl font-semibold text-white">
          Products
        </a>
        <a href="#" className="md:px-4 text-xl font-semibold text-white">
          Pricing
        </a>
      </div>
    </div>
  );
}

export default Header;
