// src/components/NewsTicker.js
import React from "react";
import PropTypes from "prop-types";

const NewsTicker = ({ text }) => {
  if (!text || typeof text !== "string" || text.trim() === "") {
    return null;
  }
  const separator = " • ";
  const repeatedText = `${text}${separator}${text}${separator}${text}`;

  return (
    <div className="group bg-yellow-400 text-black font-bold py-2 w-full overflow-hidden whitespace-nowrap">
      <div className="inline-block pl-[100%] animate-ticker-scroll paused-on-hover">
        <span className="mx-4 text-black">{repeatedText}</span>
        <span className="mx-4 text-black">{repeatedText}</span>
      </div>
    </div>
  );
};

NewsTicker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NewsTicker;
