"use client";
import { FC, useState } from "react";

import { FaArrowRight } from "react-icons/fa";

interface SupportButtonProps {
  text: string;
  onClick?: () => void;
  className?: string; // Allow custom styles
}

const Button: FC<SupportButtonProps> = ({ text, onClick, className = "" }) => {
  const [hovered, setHovered] = useState(false);
  const [reset, setReset] = useState(false);

  // Check if className contains "text-white"
  const isWhiteText = /\btext-white\b/.test(className);

  return (
    <button
      className={`flex items-center gap-2 font-medium ${className}`}
      onClick={onClick}
      onMouseEnter={() => {
        if (!reset) {
          setHovered(true);
        }
      }}
      onMouseLeave={() => {
        setHovered(false);
        setReset(true);
      }}
    >
      <span className="text-base">{text}</span>

      {/* Dynamic styles based on text color */}
      <div
        className={`relative w-8 h-8 flex items-center justify-center rounded-full overflow-hidden ${
          isWhiteText ? "bg-white" : "bg-black"
        }`}
      >
        {/* Background Transition */}

        {/* Arrow Movement */}

        <FaArrowRight
          size={18}
          className={isWhiteText ? "text-black" : "text-white"}
        />

        {/* Arrow Returns & Stays */}
        {/* {!reset && (
          <FaArrowRight
            size={18}
            className={isWhiteText ? "text-black" : "text-white"}
          />
        )} */}
      </div>
    </button>
  );
};

export default Button;
