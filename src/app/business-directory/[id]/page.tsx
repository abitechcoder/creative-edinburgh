import {
  FaArrowLeft,
  FaFacebookF,
  FaInstagram,
  FaCheck,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

import { IoCloseCircleSharp } from "react-icons/io5";
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
import { notFound } from "next/navigation";
import { Logo } from "../../../../public";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { Business, Sector, SocialMedia, User, Workforce } from "@prisma/client";
import ProductList from "@/components/ProductList";
import moment from "moment";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

const platforms = [
  { key: "facebook", icon: FaFacebookF, className: "hover:text-blue-700" },
  { key: "instagram", icon: FaInstagram, className: "hover:text-pink-500" },
  { key: "tiktok", icon: FaTiktok, className: "hover:text-black" },
  { key: "twitter", icon: FaTwitter, className: "hover:text-sky-500" },
  { key: "youtube", icon: FaYoutube, className: "hover:text-red-600" },
];

const MemberDetails = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const member:
    | (Business & {
        sector: Sector | null;
        socialMedia: SocialMedia | null;
        workforce: Workforce | null;
        user: User | null;
      })
    | null = await prisma.business.findUnique({
    where: { id: Number(id) },
    include: {
      sector: { select: { id: true, name: true } }, // ✅ Fix applied here
      socialMedia: true,
      workforce: true,
      user: true,
    },
  });

  if (!member) {
    return notFound();
  }
  return (
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
              src={member?.logo ? member.logo : Logo}
              alt={`${member?.name} logo`}
              className="mt-8"
              height={100}
              width={150}
            />
            <div className="bg-secondary text-sm lg:text-lg text-white py-2 px-6 w-fit rounded-full">
              {member?.sector?.name}
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
      <section className="lg:py-10 py-2 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* <div>
          <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
            Years in Operation
          </h3>
          <p className="font-bold text-lg mt-2 lg:mt-4">
            Opened since {moment(member.yearsInOperation).fromNow()}
          </p>
        </div> */}

        {/* <div>
          <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
            Revenue
          </h3>
          <p className="font-bold text-lg mt-2 lg:mt-4">
            {member?.revenueBracket}
          </p>
        </div> */}

        {/* <div>
          <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
            Disability Inclusion
          </h3>
          <p className="font-bold text-lg mt-2 lg:mt-4">
            {member?.disabilityInclusion}
          </p>
        </div> */}

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
          {member?.socialMedia && (
            <div className="flex gap-4 mt-2 lg:mt-4">
              {platforms.map(({ key, icon: Icon, className }) => {
                const url =
                  member.socialMedia?.[key as keyof typeof member.socialMedia];
                if (!url) return null;
                return (
                  <Link
                    key={key}
                    href={url + ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={30} className={className} />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {member?.phone && (
          <div>
            <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
              Contact Number
            </h3>
            <div className="flex font-bold text-lg mt-2 lg:mt-4  gap-3">
              <a
                href={`tel:${member.phone}`}
                className="text-blue-600 hover:underline"
              >
                📞 Call
              </a>
              <a
                href={`https://wa.me/${member.phone.replace(/^0/, "234")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        )}

        {member?.email && (
          <div>
            <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
              Email
            </h3>
            <p className="font-bold text-lg mt-2 lg:mt-4">
              <a
                href={`mailto:${member.email}`}
                className="text-blue-600 hover:underline"
              >
                <FaEnvelope size={30} className="text-blue-600" />
                {/* {member.email} */}
              </a>
            </p>
          </div>
        )}

        {member?.businessAddress && (
          <div>
            <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
              Address
            </h3>
            <p className="font-bold text-lg mt-2 lg:mt-4">
              {member.businessAddress}
            </p>
          </div>
        )}
      </section>

      <ProductList businessId={member.id} />
    </div>
  );
};

export default MemberDetails;
