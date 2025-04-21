"use client";
import CreativeEdinburgh from "@/components/landingpage/CreativeEdinburgh";
import MentoringScheme from "@/components/landingpage/MentoringScheme";
import OurCommunity from "@/components/landingpage/OurCommunity";
import UniqueEvent from "@/components/landingpage/UniqueEvent";
import WhatWeDo from "@/components/landingpage/WhatWeDo";
import React from "react";

export default function WhatWeDoPage() {
  return (
    <div className="overflow-x-hidden">
      <svg
        viewBox="0 0 467.23 585.48"
        preserveAspectRatio="xMinYMin meet"
        className="hidden lg:block absolute z-10 lg:-top-[150px] lg:right-[10%] lg:w-[500px] lg:h-[500px] fill-[#a08cff] rotate-[60deg]"
      >
        <path
          d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
          transform="translate(-853.47 -109.457)"
        ></path>
      </svg>
      <WhatWeDo />
      <CreativeEdinburgh />
      <OurCommunity />
      <MentoringScheme />
      <UniqueEvent />
    </div>
  );
}
