import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Business, Contact, Sector, SocialMedia } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "../../../../../../public";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const DirectoryDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const business:
    | (Business & { contact: Contact[] } & { sector: Sector } & {
        socialMedias: SocialMedia[];
      })
    | null = await prisma.business.findUnique({
    where: { id: Number(id) },
    include: {
      contact: true,
      socialMedias: true,
      sector: { select: { name: true } },
    },
  });

  if (!business) {
    return notFound();
  }

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-SkyBlue py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={business.logo || Logo}
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">{business.name}</h1>
                {role === "admin" && (
                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      username: "deanguerrero",
                      email: "deanguerrero@gmail.com",
                      password: "password",
                      firstName: "Dean",
                      lastName: "Guerrero",
                      phone: "+1 234 567 89",
                      address: "1234 Main St, Anytown, USA",
                      bloodType: "A+",
                      dateOfBirth: "2000-01-01",
                      sex: "male",
                      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}
                  />
                )}
              </div>
              <p className="text-sm text-gray-500">
                {business.coreProductOrService}
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>{business.businessAddress}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>{business.yearsInOperation}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>{business.contact[0].value}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>{business.contact[1].value}</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <span className="text-sm text-gray-400">Sector</span>
                <h1 className="text-lg font-semibold">
                  {business.sector.name}
                </h1>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <span className="text-sm text-gray-400">Employees</span>
                <h1 className="text-xl font-semibold">20</h1>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <span className="text-sm text-gray-400">Female</span>
                <h1 className="text-xl font-semibold">12</h1>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <span className="text-sm text-gray-400">Male</span>
                <h1 className="text-xl font-semibold">8</h1>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <p className="text-md text-gray-500 my-3">{business.description}</p>

          {business?.socialMedias && (
            <div className="mb-4">
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Social Media
              </h3>

              <div className="flex gap-4 mt-2 lg:mt-4">
                {["facebook", "instagram", "tiktok"].map((platform) => {
                  const media = business.socialMedias.find(
                    (sm) => sm.name.toLowerCase() === platform && sm.link
                  );

                  if (!media) return null;

                  const Icon =
                    platform === "facebook"
                      ? FaFacebookF
                      : platform === "instagram"
                      ? FaInstagram
                      : FaTiktok;

                  return (
                    <Link
                      key={platform}
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={30} className="hover:text-blue-700" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <h1>Opening time</h1>

          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-SkyBlueLight" href="/">
              {business.sector.name}
            </Link>
            <Link className="p-3 rounded-md bg-PurpleDeepLight" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-YellowLight" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-SkyBlueLight" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default DirectoryDetailsPage;
