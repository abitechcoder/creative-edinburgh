"use client";
import { Suspense, useEffect, useState } from "react";

import {
  FaArrowLeft,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaCheck,
} from "react-icons/fa";

import { IoCloseCircleSharp } from "react-icons/io5";
import { Pie } from "react-chartjs-2";
// Import the required Chart.js components
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
} from "chart.js";
import styles from "@/style";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Logo } from "../../../../public";
import { Axios } from "@/lib/Axios";
import Image, { StaticImageData } from "next/image";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

interface MemberType {
  id: string;
  logo: any;
  name: string;
  description: string;
  sector: string;
  ageOfOwner: number;
  genderOfOwner: string;
  workforceNumber: number;
  workforceGenderDistribution: {
    male: number;
    female: number;
  };
  coreProductOrService: string;
  yearsInOperation: number;
  revenueBracket: string;
  registrationStatus: string;
  disabilityInclusion: string;
  businessAddress: string;
  contactDetails: {
    email: string;
    phone: string;
  }
  socialMediaLinks: any;
}

const Loading = () => {
  return (
    <div className="h-screen grid place-items-center">
      <p>Loading...</p>
    </div>
  );
};

const MemberDetails = () => {
  const [member, setMember] = useState<MemberType | null>(null);
  const params = useParams();

  // Initialize chart data with empty data
  const [chartData, setChartData] = useState({
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender Distribution",
        data: [0, 0],
        backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    fetchMember();
  }, []);

  const fetchMember = async () => {
    try {
      const { data } = await Axios.get(`/businesses/${params.id}`);
      setMember(data);

      // Update chart data with the member's workforce gender distribution
      if (data && data.workforceGenderDistribution) {
        setChartData({
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "Gender Distribution",
              data: [
                data.workforceGenderDistribution.male,
                data.workforceGenderDistribution.female,
              ],
              backgroundColor: ["#f0ae1e", "#7b479c"],
              borderColor: "black",
              borderWidth: 3,
            },
          ],
        });
      }
    } catch (error) {
      console.error("Error fetching member data:", error);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="pb-8 px-8">
        <section className="bg-gray-50 pt-16 relative lg:min-h-screen grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <Link
              href={"/business-directory"}
              className="hover:cursor-pointer flex items-center gap-4 mt-[130px] lg:mb-4 lg:mt-[130px]"
            >
              <div className="bg-[#07081a] p-4 rounded-full">
                <FaArrowLeft className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold">Back to members library</p>
            </Link>
            <div className="flex flex-col lg:flex-row w-full lg:justify-between items-start lg:items-center gap-8">
              <Image
                width={200}
                src={member?.logo === "" ? Logo : member?.logo}
                alt={`${member?.name} logo`}
                className=" mt-8"
              />
              <div className="bg-secondary text-sm lg:text-lg text-white py-2 px-6 w-fit rounded-full">
                {member?.sector}
              </div>
            </div>
            <h2
              className={`${styles.heading1} text-black mb-6 lg:mb-10 mt-16 uppercase`}
            >
              {member?.name}
            </h2>
            <p
              className={`${styles.paragraph} text-gray-700 font-medium leading-relaxed text-xl mb-6 lg:mb-10`}
            >
              {member?.description}
            </p>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 467.23 585.48"
              preserveAspectRatio="xMinYMin meet"
              className="hidden lg:block fill-[#f5500d] rotate-[-90deg] absolute right-[10%] top-[10%] w-[350px] h-[350px]"
            >
              <path
                d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
                transform="translate(-853.47 -109.457)"
              ></path>
            </svg>
            <div className="absolute top-[80%] left-[20%] w-[120px] h-[120px] bg-yellow-400 rounded-full hidden lg:block"></div>
          </div>
        </section>
        <section className="lg:py-10 py-2 grid grid-cols-1 lg:grid-cols-2">
          <div className="w-4/5 mx-auto">
            {member && (
              <Pie
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    title: {
                      display: true,
                      text: "Workforce Gender Distribution (%)",
                      font: {
                        size: 18,
                        weight: "bold",
                      },
                    },
                    legend: {
                      display: true,
                      position: "top",
                    },
                  },
                }}
              />
            )}
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-4 py-8">
            <div>
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Years in Operation
              </h3>
              <p className="font-bold text-lg mt-2 lg:mt-4">
                {member?.yearsInOperation} years
              </p>
            </div>
            <div>
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Revenue
              </h3>
              <p className="font-bold text-lg mt-2 lg:mt-4">
                {member?.revenueBracket}
              </p>
            </div>
            <div>
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Disability Inclusion
              </h3>
              <p className="font-bold text-lg mt-2 lg:mt-4">
                {member?.disabilityInclusion}
              </p>
            </div>
            <div>
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Status
              </h3>
              <div className="mt-4">
                {member?.registrationStatus === "Registered" ? (
                  <FaCheck size={30} className="text-green-600" />
                ) : (
                  <IoCloseCircleSharp size={30} className="text-red-600" />
                )}
              </div>
            </div>
            <div>
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Social Media
              </h3>
              <div className="flex gap-4 mt-2 lg:mt-4">
                {member?.socialMediaLinks && (
                  <>
                    <Link href={member.socialMediaLinks.facebook}>
                      <FaFacebookF size={30} className="hover:text-blue-700" />
                    </Link>
                    <Link href={member.socialMediaLinks.instagram}>
                      <FaInstagram size={30} className="hover:text-blue-700" />
                    </Link>
                    <Link href={member.socialMediaLinks.linkedin}>
                      <FaLinkedin size={30} className="hover:text-blue-700" />
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Contact Number
              </h3>
              <p className="font-bold text-lg mt-2 lg:mt-4">
                {member?.contactDetails.phone}
              </p>
            </div>
            <div>
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Address
              </h3>
              <p className="font-bold text-lg mt-2 lg:mt-4">
                {member?.businessAddress}
              </p>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default MemberDetails;
