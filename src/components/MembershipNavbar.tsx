import React from "react";
import { MembershipLogo } from "../assets";

const MembershipNavbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white overflow-y-auto bg-opacity-80 shadow-sm z-20">
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={MembershipLogo}
            alt=""
            className="w-[80px] h-[80px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default MembershipNavbar;
