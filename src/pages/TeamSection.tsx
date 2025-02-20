import React from "react";
import { smile } from "../assets";

const TeamSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 bg-white">
      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold text-black leading-tight">
          PEOPLE BEHIND <br /> CREATIVE EDINBURGH
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          The work of Creative Edinburgh is supported by a diverse and 
          experienced creative team. Each bring to the table their own 
          unique expertise to help the community grow and thrive. Thank 
          you to all former team and board members, who have been a big 
          part of Creative Edinburgh’s journey.
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="mt-8 md:mt-0">
        <img 
          src={smile} 
          alt="Creative Edinburgh Team" 
          className="w-64 md:w-80 lg:w-190"
        />
      </div>
    </section>
  );
};

export default TeamSection;
