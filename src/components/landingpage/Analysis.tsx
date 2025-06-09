"use client";
import { useEffect, useState } from "react";
import { Axios } from "@/lib/Axios";
import useBusinesses from "@/hooks/useBusinesses";
import useSectors from "@/hooks/useSectors";
import { BusinessType } from "@/lib/types";

const Analysis = () => {
  const { businesses } = useBusinesses();
  const { sectors } = useSectors();

  return (
    <div className="bg-[url('/analysis_bg.jpg')] bg-cover bg-bottom relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="px-4 container mx-auto py-12 lg:py-20 grid grid-cols-3 relative z-10">
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {businesses?.length}+
          </h3>
          <p className="text-xs lg:text-lg text-primary">Businesses</p>
        </div>
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {businesses?.filter((business: BusinessType) => business.registrationStatus === "Registered")?.length}+
          </h3>
          <p className="text-xs lg:text-lg text-primary">Registered</p>
        </div>
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {sectors?.length}+
          </h3>
          <p className="text-xs lg:text-lg text-primary">Sectors</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
