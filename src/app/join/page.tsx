"use client";
import { useState } from "react";
import { Logo, join } from "../../../public";
import Image from "next/image";
import ContactModal from "@/components/landingpage/ContactModal";
import PricingSection from "@/components/landingpage/PricingSection";
import Link from "next/link";

const JoinMembership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  return (
    <section className="w-full flex min-h-screen">
      <div>
        <div className="mx-5">
          <div className="mt-32">
            <Image
              src={join}
              alt="Hero Section"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Image
              src={Logo}
              alt=""
              className="w-[180px] h-[180px] object-contain"
            />
            <h1 className="flex text-4xl w-full sm:text-start text-center sm:w-[52%] gap-2 font-semibold flex-col">
              Creative Hub Africa
              <span className="text-[15px] font-normal leading-6">
                Creative Hub Africa unites creative thinkers across the city.
                Through events, career support, and advocacy, we bring together
                and help grow the city’s creative community, providing a space
                for creation, collaboration, and connection at every stage of
                your career.
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              <button
                onClick={() => setIsModalOpen(true)} // Open the modal
                className="px-6 py-2 rounded outline-cyan-800 hover:bg-cyan-800 hover:text-white text-cyan-800 bg-transparent outline-2"
              >
                Contact US
              </button>
              <Link
                href={`/sign-in`}
                className="px-6 py-2 rounded cursor-pointer bg-cyan-800 text-white"
              >
                Member Log in
              </Link>
            </div>
          </div>
        </div>
        <PricingSection />
        <div className="mt-10 mb-20 items-center flex flex-col gap-2">
          <Link
            href={"/sign-in"}
            className="px-6 py-2 rounded outline-cyan-800 transition scale-105 hover:bg-cyan-800 hover:text-white text-cyan-800 bg-transparent outline-2"
          >
            MEMBER LOGIN
          </Link>
          <p>Login to manage your membership settings</p>
        </div>
        {/* Render the Contact Modal if open */}
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </section>
  );
};

export default JoinMembership;
