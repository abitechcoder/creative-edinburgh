"use client";
import ContactModal from "@/components/landingpage/ContactModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { FaCalendar, FaHome } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";

const Login = () => {
  const [activeTab, setActiveTab] = useState("MEMBERSHIP INFORMATION");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const tabs = [
    "MEMBERSHIP INFORMATION",
    "PAYMENT DETAILS",
    "UPCOMING EVENTS",
    "POSTS",
  ];
  const router = useRouter();

  const signInUser = () => {
    router.push(`/app`);
  };

  return (
    <div className="mt-[150px] bg-white mb-10">
      {/* Navigation Bar */}
      <div className="grid px-4 grid-cols-2 gap-8 lg:flex justify-center container mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-sm lg:text-md font-semibold hover:cursor-pointer ${
              activeTab === tab ? "text-black" : "text-gray-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute left-0 bottom-[-6px] py-[2px] w-full h-[2px] bg-blue-600"></div>
            )}
          </button>
        ))}
      </div>
      {/* Content Section (White Space) */}
      <div className="container mx-auto p-8 bg-white min-h-[400px]">
        {activeTab === "MEMBERSHIP INFORMATION" && (
          <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">MEMBER LOG IN</h2>
            <p className="text-sm text-gray-600 mb-4">
              We'll find the membership by looking up your email address. Enter
              the email address associated with this organization.
            </p>

            {/* Email Input */}
            <label className="block text-gray-700 text-sm mb-1">EMAIL</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded-md mb-4"
              required
            />

            <input
              type="password"
              placeholder="password"
              className="w-full border p-2 rounded-md mb-4"
              required
            />

            {/* Lookup Button */}
            <button
              onClick={() => {
                signInUser();
              }}
              className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600"
            >
              Sign In Now
            </button>
          </div>
        )}

        {activeTab === "PAYMENT DETAILS" && (
          <div className="max-w-md mx-auto bg-white h-[300px] grid place-items-center p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Payment Details</h2>
          </div>
        )}

        {activeTab === "UPCOMING EVENTS" && (
          <div className="max-w-md items-center justify-center flex flex-col gap-5 mx-auto mt-20">
            <FaCalendar size={50} className="text-gray-600" />
            <h2 className="text-xl font-medium">
              No upcoming events available
            </h2>
            <p className="text-gray-600 text-center">
              This organization doesn't have any upcoming events currently
              available. Check back later.
            </p>
          </div>
        )}
        {activeTab === "POSTS" && (
          <div className="max-w-md items-center justify-center flex flex-col gap-5 mx-auto mt-20">
            <FaFile size={50} className="text-gray-600" />
            <h2 className="text-xl font-medium">No posts available</h2>
            <p className="text-gray-600 text-center">
              This organization doesn't have any posts currently available.
              Check back later.
            </p>
          </div>
        )}
      </div>
      <div className="grid place-items-center">
        <Link href={`/join`}>
          <div className="px-6 py-2 flex rounded-lg items-center gap-2 relative mx-auto cursor-pointer outline-orange-800 hover:bg-orange-800 hover:text-white text-orange-800 bg-transparent outline-2">
            <FaHome />
            <p>MAIN PAGE</p>
          </div>
        </Link>
      </div>
      {/* Contact Modal */}
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Login;
