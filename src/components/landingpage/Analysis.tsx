"use client";
import { useEffect, useState } from "react";
import { Axios } from "@/lib/Axios";

const Analysis = () => {
  const [businesses, setBusinesses] = useState<any>([]);
  const [sectors, setSectors] = useState<any>([]);
  const [regBusinesses, setRegBusinesses] = useState<any>([]);

  useEffect(() => {
    fetchBusinesses();
    fetchSectors();
  }, []);

  const fetchBusinesses = async () => {
    const { data } = await Axios.get(`/businesses`);
    setBusinesses(data);
    const filtered = data?.filter(
      (business: any) => business.registrationStatus === "Registered"
    );
    setRegBusinesses(filtered);
  };

  const fetchSectors = async () => {
    const { data } = await Axios.get(`/sectors`);
    setSectors(data);
  };

  return (
    <div className="bg-[url('/analysis_bg.jpg')] bg-cover bg-bottom relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="px-4 container mx-auto py-15 lg:py-20 grid grid-cols-3 relative z-10">
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {businesses?.length}+
          </h3>
          <p>Businesses</p>
        </div>
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {regBusinesses?.length}+
          </h3>
          <p>Registered</p>
        </div>
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {sectors?.length}+
          </h3>
          <p>Sectors</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
