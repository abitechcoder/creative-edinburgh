import styles from "../style";
import { MyAccordion } from "../components";
import { useEffect, useState } from "react";
import { Axios } from "../Axios"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

interface BusinessType {
  id: string;
  name: string;
  description: string;
  sector: string;
}

interface SectorType {
  id: string;
  title: string;
}

const MembersLibrary = () => {
  const [businesses, setBusinesses] = useState<BusinessType[] | []>([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState<BusinessType[] | []>([]);
  const [selectedSector, setSelectedSector] = useState<string>("");
  const [sectors, setSectors] = useState<SectorType[] | []>([]);

  useEffect(() => {
    fetchSectors();
    fetchBusinesses();
  }, [])


  useEffect(() => {
    filterBusinesses();
  }, [selectedSector, businesses])

  const fetchSectors = async () => {
    const { data } = await Axios.get("/sectors");
    setSectors(data);
  }

  const fetchBusinesses = async () => {
    const { data } = await Axios.get("/businesses");
    setBusinesses(data);
  }

  const filterBusinesses = async () => {
    if (selectedSector === "") {
      setFilteredBusinesses(businesses);
    } else {
      const filtered = businesses.filter((item: BusinessType) =>
        item.sector === selectedSector)
      setFilteredBusinesses(filtered);
    }
  }

  // const colors: any = {
  //   "All": "border-[#faebe6]",
  //   "Free": "border-[#faebe6]",
  //   "Plus": "border-[#9e8cff]",
  //   "Premium": "border-[#32d296]",
  //   "Business": "border-[#faebe6]",
  //   "Community Leader": "border-[#faebe6]"
  // }

  // const bg_colors: any = {
  //   "All": "bg-[#faebe6]",
  //   "Free": "bg-[#faebe6]",
  //   "Plus": "bg-[#9e8cff]",
  //   "Premium": "bg-[#32d296]",
  //   "Business": "bg-[#faebe6]",
  //   "Community Leader": "bg-[#faebe6]"
  // }

  return (
    <div className="pb-8 px-8">
      <section className="bg-gray-50 py-16 relative lg:min-h-[50vh] lg:mt-[120px] grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full h-full flex flex-col justify-center">
          <h2 className={`${styles.heading1} text-black mb-6 lg:mb-10 mt-16 uppercase`}>Creative Edinburgh Members Directory</h2>
          <p
            className={`${styles.paragraph} text-gray-700 mb-5 font-medium leading-relaxed text-xl`}
          >
            Explore our Members Directory! You can search by sector area and connect with the city’s makers, thinkers and innovators.
          </p>
          <p
            className={`${styles.paragraph} text-gray-700 font-medium leading-relaxed text-xl`}
          >
            Our members are currently updating their own profiles - please bear with us, this can take some time!
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-[50%] left-20 w-[120px] h-[120px] bg-yellow-400 rounded-full hidden lg:block"></div>
        </div>
      </section>
      <div className="my-8">
        <MyAccordion title={"FILTER BY SECTOR"} data={sectors} selectedItem={selectedSector} setSelectedItem={setSelectedSector} />
        {/* <MyAccordion title={"Filter by membership type"} data={MEMBERSHIP_TYPE} selectedItem={selectedPlan} setSelectedItem={setSelectedPlan} /> */}
      </div>

      <div>
        {filteredBusinesses.length === 0 ? (
          <div className="px-8 py-16 grid place-items-center text-center">
            No Businesses found. Please try another filter
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-12 py-20">
            {filteredBusinesses.map((business) => (
              <div key={business.id} className={`relative border-secondary border-4 p-8 rounded-lg flex flex-col gap-4 bg-[#faebe6] items-start`}>
                <div className={`bg-secondary grid text-white place-items-center rounded-lg text-sm font-bold uppercase lg:h-[40px] lg:w-[250px] p-2 lg:absolute -top-[20px] left-8 z-10`}>{business.sector}</div>
                <h1 className="text-2xl font-bold mt-8">{business.name}</h1>
                <p>
                  {business.description.length > 200 ? `${business.description.substring(0, 200)}...` : business.description}
                </p>
                <Link to={`/membership/${business.id}`} className="hover:cursor-pointer flex items-center gap-4 my-4">
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
  )
}

export default MembersLibrary