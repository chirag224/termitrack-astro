// src/components/FixedContacts.jsx
// Displays fixed phone and email widgets with hover effect.

import React from "react";
import { FaPhone } from "react-icons/fa6"; // Ensure react-icons is installed
import { MdMail } from "react-icons/md"; // Ensure react-icons is installed

function FixedContacts() {
  return (
    <>
      {/* Phone Widget */}
      <div className="fixed top-[24%] right-0 flex items-center group z-50">
        <div className="bg-gradient-to-r from-green-600 to-lime-400 w-14 h-14 flex items-center justify-center rounded-l-2xl shadow-lg">
          <FaPhone className="text-3xl text-white" />
        </div>
        <div className="bg-gradient-to-r from-lime-400 to-yellow-500 h-14 flex items-center justify-center overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 shadow-lg">
          <a
            href="tel:9223453450"
            className="text-black font-semibold px-2 whitespace-nowrap"
          >
            9223453450
          </a>
        </div>
      </div>
      {/* Email Widget */}
      <div className="fixed top-[calc(24%+70px)] right-0 flex items-center group z-50">
        <div className="bg-gradient-to-r from-green-600 to-lime-400 w-14 h-14 flex items-center justify-center rounded-l-2xl shadow-lg">
          <MdMail className="text-3xl text-white" />
        </div>
        <div className="bg-gradient-to-r from-lime-400 to-yellow-500 h-14 flex items-center justify-center overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 shadow-lg">
          <a
            href="mailto:info@termitrack.com"
            className="text-black font-semibold px-2 whitespace-nowrap"
          >
            info@termitrack.com
          </a>
        </div>
      </div>
    </>
  );
}

export default FixedContacts;
