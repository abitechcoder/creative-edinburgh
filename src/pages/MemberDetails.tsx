import styles from "../style";
import { Suspense, useEffect, useState } from "react";
import { Axios } from "../Axios"
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { Logo } from "../assets";

interface MemberType {
  id: string;
  logo: string;
  name: string;
  description: string;
  sector: string;
}

const Loading = () => {
  return (
    <div className="h-screen grid place-items-center">
    <p>Loading...</p>
    </div>
  )
}

const MemberDetails = () => {
  const [member, setMember] = useState<MemberType | null>(null);
  const params = useParams();

  useEffect(() => {
    fetchMember();
  }, [])

  const fetchMember = async () => {
    const { data } = await Axios.get(`/businesses/${params.id}`);
    setMember(data);
  }

  return (
    <Suspense fallback={<Loading/>}>
      <div className="pb-8 px-8">
      <section className="bg-gray-50 py-16 relative lg:min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full h-full flex flex-col items-start justify-center">
          <Link to={"/membership/members-library"} className="hover:cursor-pointer flex items-center gap-4 mt-[130px] lg:mb-4 lg:mt-[130px]">
            <div className="bg-[#07081a] p-4 rounded-full">
              <FaArrowLeft className="text-white" size={16} />
            </div>
            <p className="text-lg font-bold">Back to members library</p>
          </Link>
          <div className="flex flex-col lg:flex-row w-full lg:justify-between items-start lg:items-center gap-8">
          <img src={member?.logo === "" ? Logo : ""} alt={`${member?.name} logo`} className="h-[70px] mt-8" />
          <div className="bg-secondary text-sm lg:text-lg text-white py-3 px-6 w-fit rounded-full">
            {member?.sector}
          </div>
          </div>
          <h2 className={`${styles.heading1} text-black mb-6 lg:mb-10 mt-16 uppercase`}>
            {member?.name}
          </h2>
          {/* <p
            className={`${styles.paragraph} text-secondary mb-5 font-bold leading-relaxed text-xl uppercase`}
          >
            ABOUT
          </p> */}
          <p
            className={`${styles.paragraph} text-gray-700 font-medium leading-relaxed text-xl mb-6 lg:mb-10`}
          >
            {member?.description}
          </p>

          <div>
          </div>
        </div>
        <div className="relative">
          <svg viewBox="0 0 467.23 585.48" preserveAspectRatio="xMinYMin meet" className="hidden lg:block fill-[#f5500d] rotate-[-90deg] absolute right-[10%] top-[10%] w-[350px] h-[350px]"><path d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94" transform="translate(-853.47 -109.457)"></path></svg>
          <div className="absolute top-[80%] left-[20%] w-[120px] h-[120px] bg-yellow-400 rounded-full hidden lg:block"></div>
          {/* {member?.photo !== "" && (<img src={member?.photo} className="hidden lg:block h-[400px] w-[300px] object-center object-cover absolute left-[40%] top-[20%]"/>)} */}
        </div>
      </section>
    </div>
    </Suspense>
  )
}

export default MemberDetails;