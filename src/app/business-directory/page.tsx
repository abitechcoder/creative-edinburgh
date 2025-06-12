"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import MyAccordion from "@/components/landingpage/MyAccordion";
import Image from "next/image";
import { Logo } from "../../../public";
import useSectors from "@/hooks/useSectors";
import useBusinesses from "@/hooks/useBusinesses";
import { BusinessType, SectorType } from "@/lib/types";
import Analysis from "@/components/landingpage/Analysis";
import styles from "@/style";


const MembersLibrary = () => {
  const [filteredBusinesses, setFilteredBusinesses] = useState<
    BusinessType[]
  >([]);
  const [selectedSector, setSelectedSector] = useState<number>(0);
  const { sectors, isLoadingSect } = useSectors();
  const { businesses, isLoadingBiz } = useBusinesses();

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    filterBusinesses();
  }, [selectedSector, businesses]);

  const filterBusinesses = () => {
    if (selectedSector === 0) {
      setFilteredBusinesses(businesses);
    } else {
      const filtered = businesses.filter(
        (item: BusinessType) => item.sector === selectedSector
      );
      setFilteredBusinesses(filtered);
    }
  };

  if (isLoadingSect || isLoadingBiz) {
    return (<div className="h-screen grid place-items-center">
      <div className="flex flex-col justify-center items-center p-4">
        <Image src={"/loading.gif"} width={50} height={50} alt="Loading animation" />
        <p>Loading data ...</p>
      </div>
    </div>);
  }

  const visibleBusinesses = filteredBusinesses.filter((business) =>
    business.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div className="pb-8 px-8 mt-[140px]">
      <section className="bg-gray-50 py-16 relative lg:min-h-[50vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full h-full flex flex-col justify-center">
          <h2
            className={`${styles.heading1} text-black mb-6 lg:mb-10 mt-16 uppercase`}
          >
            Creative Hub Africa Members Directory
          </h2>
          <p
            className={`${styles.paragraph} text-gray-700 mb-5 font-medium leading-relaxed text-xl`}
          >
            Explore our Members Directory! You can search by sector area and
            connect with the city’s makers, thinkers and innovators.
          </p>
          <p
            className={`${styles.paragraph} text-gray-700 font-medium leading-relaxed text-xl`}
          >
            Our members are currently updating their own profiles - please bear
            with us, this can take some time!
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-[50%] left-20 w-[120px] h-[120px] bg-yellow-400 rounded-full hidden lg:block"></div>
        </div>
      </section>
      <Analysis/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
        {sectors?.map((sector: SectorType) => (
          <Link
            href={`/business-directory/sector/${sector.id}`}
            key={sector.id}
            className="group bg-secondary hover:bg-primary relative rounded-lg p-6 lg:p-12 lg:gap-8 text-center grid place-items-center"
          >
            <h3 className="font-bold text-lg lg:text-2xl text-white group-hover:text-secondary">
              {sector.title}
            </h3>
          </Link>
        ))}
      </div>
      <div className="my-8">
        <MyAccordion
          title={"FILTER BY SECTOR"}
          data={sectors}
          selectedItem={selectedSector}
          setSelectedItem={setSelectedSector}
        />
      </div>

      <div className="flex w-full md:w-1/3 py-2 items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          value={filter}
          type="text"
          placeholder="Search..."
          className="w-full p-2 bg-transparent outline-none"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div>
        {visibleBusinesses.length === 0 ? (
          <div className="px-8 py-16 grid place-items-center text-center">
            No Businesses found. Please try another filter
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-12 py-20">
            {visibleBusinesses.map((business) => (
              <div
                key={business.id}
                className={`relative border-secondary border-4 p-8 rounded-lg flex flex-col gap-4 bg-[#faebe6] items-start`}
              >
                <div
                  className={`bg-secondary grid text-white place-items-center rounded-lg text-sm font-bold uppercase lg:h-[40px] lg:w-[250px] p-2 lg:absolute -top-[20px] left-8 z-10`}
                >
                  {
                    sectors.find((sector: SectorType) => sector.id === business.sector)?.title ||
                    "Unknown Sector"
                  }
                </div>
                <Image
                  src={business.logo === "" ? Logo : business.logo}
                  alt={`${business.name} logo`}
                  className="mt-8"
                  height={100}
                  width={150}
                />
                <h1 className="text-2xl font-bold">{business.name}</h1>
                <p>
                  {business.description.length > 200
                    ? `${business.description.substring(0, 200)}...`
                    : business.description}
                </p>
                <Link
                  href={`/business-directory/${business.id}`}
                  className="hover:cursor-pointer flex items-center gap-4 my-4"
                >
                  <p className="text-lg font-bold">Visit Profile</p>
                  <div className="bg-[#07081a] p-4 rounded-full">
                    <FaArrowRight className="text-white" size={16} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersLibrary;
