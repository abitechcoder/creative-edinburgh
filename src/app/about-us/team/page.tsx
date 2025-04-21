"use client";
import Board from "@/components/landingpage/Board";
import ExecutiveTeam from "@/components/landingpage/ExecutiveTeam";
import TeamMember from "@/components/landingpage/TeamMember";
import WorkWithUs from "@/components/landingpage/WorkWithUs";
import styles from "@/style";
import React from "react";

export default function Team() {
  return (
    <div>
      <section className="px-6 py-16 bg-gray-50 min-h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="pt-[100px] lg:pt-0 lg:flex flex-col justify-center">
          <h1
            className={`text-5xl lg:text-7xl font-extrabold text-black mb-10 uppercase  `}
          >
            PEOPLE BEHIND <br /> Creative Hub Africa
          </h1>
          <p className={`${styles.paragraph} text-black leading-relaxed`}>
            The work of Creative Hub Africa is supported by a diverse and
            experienced creative team. Each bring to the table their own unique
            expertise to help the community grow and thrive. Thank you to all
            former team and board members, who have been a big part of Creative
            Hub Africa’s journey.
          </p>
        </div>

        {/* Right Section - Smiley Graphic */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 714.033 646.015"
            className="fill-purple-400 w-[100%] mx-auto lg:absolute top-[15%]"
          >
            <g transform="translate(-725.967 -124.993)">
              <path
                d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
                transform="matrix(0.358, 0.934, -0.934, 0.358, 1068.891, -711.016)"
                fill="#a08cff"
              ></path>{" "}
              <path
                d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
                transform="translate(-62.807 -688.398)"
                fill="#ffe11e"
              ></path>{" "}
              <path
                d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
                transform="translate(210.023 -645.277)"
                fill="#f5500d"
              ></path>
            </g>
          </svg>
        </div>
      </section>
      <ExecutiveTeam />
      <TeamMember />
      {/* <PastTeam /> */}
      <WorkWithUs />
      <Board />
      {/* <PastMember /> */}
      {/* <CommunityAdvisor />
      <SteeringGroup /> */}
    </div>
  );
}
