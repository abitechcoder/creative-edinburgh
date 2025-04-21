"use client";
import Image from "next/image";
import { PeopleNetworking } from "../../../public";
import Link from "next/link";
import Button from "./Button";

const ConnectSection = () => {
  return (
    <section className="bg-secondary text-white py-8 px-4 relative overflow-hidden">
      <svg
        viewBox="0 0 304.343 675.885"
        preserveAspectRatio="xMinYMin meet"
        className="absolute z-10 top-[75%] -right-20 w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] hidden lg:block fill-white rotate-90"
      >
        <path
          d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
          transform="translate(-557.701 -242.912)"
        ></path>
      </svg>
      <div className="container mx-auto py-16 flex flex-col-reverse gap-0 lg:gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col justify-center pt-16 lg:py-0">
          <h2 className="text-5xl lg:text-8xl font-bold mb-4">
            CREATE. CONNECT. CHANGE.
          </h2>
          <p className="text-xl lg:text-2xl">
            <span className="font-bold">
              Are you a local entrepreneur or an investor?
            </span>{" "}
            Find out more about Sierra Leone creative ecosystem.{" "}
          </p>

          <Link
            href={`/join`}
            className="w-full md:w-1/3  py-2 rounded cursor-pointer bg-cyan-800 text-white mt-5 text-center"
          >
            Get Started
          </Link>
        </div>
        <div className="relative space-y-4 flex-1">
          <svg
            viewBox="0 0 137.169 137.76"
            preserveAspectRatio="xMinYMin meet"
            className="fill-white z-10 absolute w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] -left-[20px] lg:-left-[60px] top-[20%] lg:top-[20%]"
          >
            <path
              d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
              transform="translate(-947.774 -832.697)"
            ></path>
          </svg>
          <Image
            src={PeopleNetworking}
            alt="People networking"
            className="w-full rounded-lg shadow-lg h-[300px] lg:h-[500px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
