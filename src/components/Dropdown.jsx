/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

// --- Dropdown Component ---
const Dropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  const timeoutId = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => setOpen(false), 150);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-1 text-white hover:text-yellow-400 transition px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
      >
        {label}
        <FiChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-1 w-48 bg-yellow-100 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 z-50">
          <div
            className="py-1 font-semibold"
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
  const timeoutId = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId.current);
    setSubOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => setSubOpen(false), 100);
  };

  if (to) {
    return (
      <a
        href={to}
        className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 rounded hover:bg-yellow-300 cursor-pointer"
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
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={subOpen}
      >
        <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 rounded hover:bg-yellow-300 cursor-pointer">
          {label}
          <FiChevronDown
            className={`text-gray-500 transition-transform duration-200 ${
              subOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {subOpen && (
          <div className="absolute left-full top-0 -mt-1 w-48 bg-yellow-200 shadow-lg rounded-md z-50">
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
