import styles from "../style";
import { MyAccordion } from "../components";
import { MEMBERSHIP_TYPE, SECTORS } from "../constant";
import { useEffect, useState } from "react";
import { Axios } from "../Axios"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

interface MemberType {
  id: string;
  name: string;
  about_me: string;
  photo: string;
  sector: string;
  membership_type: string;
}

const MembersLibrary = () => {
  const [members, setMembers] = useState<MemberType[] | []>([]);
  const [filteredMembers, setFilteredMembers] = useState<MemberType[] | []>([]);
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [selectedPlan, setSelectedPlan] = useState<string>("All");

  useEffect(() => {
    fetchMembers();
  }, [])

  useEffect(() => {
    filterMembers();
  }, [selectedPlan, selectedSector, members])

  const fetchMembers = async () => {
    const { data } = await Axios.get("/members");
    setMembers(data);
  }

  const filterMembers = async () => {
    if (selectedPlan === "All" && selectedSector === "All") {
      setFilteredMembers(members);
    } else if (selectedPlan === "All" && selectedSector !== "All") {
      const filtered = members.filter((item: MemberType) =>
        item.sector === selectedSector)
      setFilteredMembers(filtered);
    } else if (selectedPlan !== "All" && selectedSector === "All") {
      const filtered = members.filter((item: MemberType) =>
        item.membership_type == selectedPlan)
      setFilteredMembers(filtered);
    } else {
      const filtered = members.filter((item: MemberType) =>
        item.membership_type === selectedPlan && item.sector === selectedSector)
      setFilteredMembers(filtered);
    }
  }

  const colors: any = {
    "All": "border-[#faebe6]",
    "Free": "border-[#faebe6]",
    "Plus": "border-[#9e8cff]",
    "Premium": "border-[#32d296]",
    "Business": "border-[#faebe6]",
    "Community Leader": "border-[#faebe6]"
  }

  const bg_colors: any = {
    "All": "bg-[#faebe6]",
    "Free": "bg-[#faebe6]",
    "Plus": "bg-[#9e8cff]",
    "Premium": "bg-[#32d296]",
    "Business": "bg-[#faebe6]",
    "Community Leader": "bg-[#faebe6]"
  }

  return (
    <div className="pb-8 px-8">
      <section className="bg-gray-50 py-16 relative lg:h-screen grid grid-cols-1 lg:grid-cols-2">
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
        <MyAccordion title={"FILTER BY SECTOR"} data={SECTORS} selectedItem={selectedSector} setSelectedItem={setSelectedSector} />
        <MyAccordion title={"Filter by membership type"} data={MEMBERSHIP_TYPE} selectedItem={selectedPlan} setSelectedItem={setSelectedPlan} />
      </div>

      <div>
        {filteredMembers.length === 0 ? (
          <div className="px-8 py-16 grid place-items-center text-center">
            No Members found. Please try another filter
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-12 py-20">
            {filteredMembers.map((member) => (
              <div key={member.id} className={`relative ${colors[member.membership_type]} border-4 p-8 rounded-lg flex flex-col gap-4 bg-[#faebe6] items-start`}>
                <div className={`${bg_colors[member.membership_type]} grid place-items-center rounded-lg text-sm font-bold uppercase h-[40px] w-[80px] absolute -top-[20px] left-8 z-10`}>{member.membership_type}</div>
                {member?.photo && (
                  <img
                    src={member.photo}
                    alt={`photo of ${member.name}`}
                    className={`w-full rounded-lg h-[300px] lg:h-[400px] object-cover ${member.membership_type === "Business" ? "object-center" : "object-top"}`}
                  />
                )}
                <h1 className="text-2xl font-bold">{member.name}</h1>
                <p>
                  {member.about_me.length > 200 ? `${member.about_me.substring(0, 200)}...` : member.about_me}
                </p>
                <Link to={`/membership/${member.id}`} className="hover:cursor-pointer flex items-center gap-4 my-4">
                  <p className="text-lg font-bold">Visit Profile</p>
                  <div className="bg-[#07081a] p-4 rounded-full">
                    <FaArrowRight className="text-white" size={16} />
                  </div>
                </Link>
                <div className="bg-white p-2 rounded-lg text-sm font-normal">
                  {member.sector}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


    </div>
  )
}

export default MembersLibrary