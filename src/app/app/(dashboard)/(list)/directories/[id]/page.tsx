import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormContainer from "@/components/FormContainer";

import Performance from "@/components/Performance";
import ProductList from "@/components/ProductList";
import { role } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Business, Sector, SocialMedia, User, Workforce } from "@prisma/client";
import moment from "moment";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const platforms = [
  { key: "facebook", icon: FaFacebookF, className: "hover:text-blue-700" },
  { key: "instagram", icon: FaInstagram, className: "hover:text-pink-500" },
  { key: "tiktok", icon: FaTiktok, className: "hover:text-black" },
  { key: "twitter", icon: FaTwitter, className: "hover:text-sky-500" },
  { key: "youtube", icon: FaYoutube, className: "hover:text-red-600" },
];

const DirectoryDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const business:
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
                src={business.logo || "/logo.png"}
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
                  <FormContainer
                    table="directory"
                    type="update"
                    data={business}
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
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>{business?.phone}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>{business?.email}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  Opened since
                  <span>{moment(business.yearsInOperation).fromNow()}</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap ">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[46%] 2xl:w-[48%] ">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <span className="text-sm text-gray-400">Sector</span>
                <h1 className="text-sm font-semibold">
                  {business?.sector?.name}
                </h1>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[46%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <span className="text-sm text-gray-400">Employees</span>
                <h1 className="text-xl font-semibold">
                  {business?.workforce?.total ? business?.workforce?.total : 0}
                </h1>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[46%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <span className="text-sm text-gray-400">Female</span>
                <h1 className="text-xl font-semibold">
                  {business?.workforce?.female
                    ? business?.workforce?.female
                    : 0}
                </h1>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[46%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <span className="text-sm text-gray-400">Male</span>
                <h1 className="text-xl font-semibold">
                  {business?.workforce?.male ? business?.workforce?.male : 0}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 ">
          <p className="text-md text-gray-500 my-3">{business.description}</p>

          {/* show all social media */}
          <div className="mt-4 mb-6">
            <div className="flex gap-6 items-center my-3">
              <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
                Social Media
              </h3>

              {role === "admin" && (
                <FormContainer
                  table="socialmedia"
                  type="create"
                  data={business}
                />
              )}
            </div>
            {business?.socialMedia && (
              <div className="mb-4">
                <div className="flex gap-4 mt-2 lg:mt-4">
                  {platforms.map(({ key, icon: Icon, className }) => {
                    const url =
                      business.socialMedia?.[
                        key as keyof typeof business.socialMedia
                      ];

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
              </div>
            )}
          </div>
          {/* show all Products  */}

          {/* product list */}

          <ProductList businessId={business.id} adminView={true} />

          {/* <h1>Opening time</h1> */}

          {/* <BigCalendar /> */}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Actions</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-SkyBlueLight"
              href={`/app/directories?sectorId=${business?.sector?.id}`}
            >
              {business?.sector?.name}
            </Link>

            <div className="">
              {role === "admin" && (
                <FormContainer
                  table="workforce"
                  type="create"
                  data={business}
                  text={"Workforce"}
                />
              )}
            </div>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default DirectoryDetailsPage;
