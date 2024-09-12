import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex bg-gray-100 border-b border-black justify-between items-center p-[10px__10px] md:pl-4 md:pr-4">
      <button className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="flex items-center space-x-4">
        <FiSearch size={24} />
        <FiBell size={24} />
      </div>
    </header>
  );
};

export default Header;
