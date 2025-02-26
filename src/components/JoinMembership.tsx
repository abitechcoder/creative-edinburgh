import { useState } from "react";
import MembershipNavbar from "./MembershipNavbar";
import { join, MembershipLogo } from "../assets";
import PricingSection from "./PricingSection";
import MembershipFooter from "./MembershipFooter";
import ContactModal from "./ContactModal"; // Import the modal component
import { Link } from "react-router";

const JoinMembership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  return (
    <section className="w-full flex h-screen">
      <MembershipNavbar />
      <div>
        <div className="mx-5">
          <div className="mt-30">
            <img src={join} alt="Hero Section" className="w-full rounded-lg" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <img
              src={MembershipLogo}
              alt=""
              className="w-[180px] h-[180px] object-contain"
            />
            <h1 className="flex text-4xl w-full sm:text-start text-center sm:w-[52%] gap-2 font-semibold flex-col">
              Creative Edinburgh
              <a
                href="https://creative-edinburgh.com/"
                className="text-sm hover:underline text-cyan-800"
              >
                creative-edinburgh.com/
              </a>
              <span className="text-[15px] font-normal leading-6">
                Creative Edinburgh unites creative thinkers across the city.
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
              <Link to={`/login`}>
                <button className="px-6 py-2 rounded cursor-pointer bg-cyan-800 text-white">
                  Member Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
        <PricingSection />
        <MembershipFooter />

        {/* Render the Contact Modal if open */}
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </section>
  );
};

export default JoinMembership;
