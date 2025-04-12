/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// --- Dropdown Component ---
const Dropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-white hover:text-[#FBBF24] transition px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
        {label}
        <FiChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute font-semibold left-0 mt-1 w-48 bg-lime-100 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// --- DropdownItem Component ---
const DropdownItem = ({ label, children, to }) => {
  const [subOpen, setSubOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setSubOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setSubOpen(false), 100);
  };

  if (to) {
    return (
      <a
        href={to}
        className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 rounded hover:bg-yellow-400 cursor-pointer"
        role="menuitem"
      >
        {label}
        {children && <FiChevronDown className="text-gray-500 ml-auto" />}
      </a>
    );
  }

  if (children) {
    return (
      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={subOpen}
      >
        <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 rounded hover:bg-yellow-400 cursor-pointer">
          {label}
          <FiChevronDown
            className={`text-gray-500 transition-transform duration-200 ${
              subOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {subOpen && (
          <div className="absolute left-full top-0 -mt-1 w-48 rounded bg-yellow-300 shadow-lg z-10">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <span
      className="block px-4 py-2 text-sm text-gray-700 rounded"
      role="menuitem"
    >
      {label}
    </span>
  );
};

export { Dropdown, DropdownItem };
