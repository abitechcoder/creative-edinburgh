import React from "react";
import { Member } from "../type";

interface MemberCardProps {
  member: Member;
}

const MeetMemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <a href={member.link}>
      <div className="relative">
        <div className="w-full h-64 rounded-lg bg-red-500">
          <img
            src={member.image}
            alt={member.title}
            className="w-full h-64 object-cover object-center rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-x-2 hover:-translate-y-2"
          />
        </div>
        <span className="absolute -top-4 left-2 bg-purple-500 text-white px-5 py-2 text-xs font-bold rounded z-10">
          INTERVIEW
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-2xl text-black">{member.title}</h3>
        <p className="text-black text-base mt-4">{member.description}</p>
        <p className="text-black text-base mt-3">{member.description2}</p>
        <p className="text-gray-500 text-sm mt-3">{member.date}</p>
      </div>
    </a>
  );
};

export default MeetMemberCard;
