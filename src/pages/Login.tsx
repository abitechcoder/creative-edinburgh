import React, { useState } from "react";
import {
  ContactModal,
  MembershipFooter,
  MembershipNavbar,
} from "../components";
import { MembershipLogo } from "../assets";
import { FaCalendar, FaHome } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import { Link } from "react-router";

const Login = () => {
  const [activeTab, setActiveTab] = useState("MEMBERSHIP INFORMATION");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const tabs = [
    "MEMBERSHIP INFORMATION",
    "PAYMENT DETAILS",
    "UPCOMING EVENTS",
    "POSTS",
  ];

  return (
    <div>
      <MembershipNavbar />

      {/* Navigation Bar */}
      <div className="h-screen">
        <nav className="bg-white mt-20 shadow-md">
          <div className="flex items-center flex-col">
            <div className="container mx-auto flex items-center justify-between p-4">
              {/* Logo & Title */}
              <div className="flex items-center space-x-2">
                <img
                  src={MembershipLogo}
                  alt="Logo"
                  className="w-[80px] h-[80px] object-contain"
                />
                <h1 className="text-4xl font-semibold">Creative Edinburgh</h1>
              </div>

              {/* Contact Us Button */}
              <button
                onClick={() => setIsModalOpen(true)} // Open the modal
                className="px-6 py-2 rounded outline-cyan-800 hover:bg-cyan-800 hover:text-white text-cyan-800 bg-transparent outline-2"
              >
                Contact Us
              </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-6 mb-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative text-md font-semibold ${
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
          </div>
        </nav>

        {/* Content Section (White Space) */}
        <div className="container mx-auto p-8 bg-white min-h-[400px]">
          {activeTab === "MEMBERSHIP INFORMATION" && (
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-3">MEMBER LOG IN</h2>
              <p className="text-sm text-gray-600 mb-4">
                We'll find the membership by looking up your email address.
                Enter the email address associated with this organization.
              </p>

              {/* Email Input */}
              <label className="block text-gray-700 text-sm mb-1">EMAIL</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded-md mb-4"
              />

              {/* Lookup Button */}
              <button className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600">
                LOOKUP EMAIL
              </button>
            </div>
          )}

          {activeTab === "PAYMENT DETAILS" && (
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-3">MEMBER LOG IN</h2>
              <p className="text-sm text-gray-600 mb-4">
                We'll find the membership by looking up your email address.
                Enter the email address associated with this organization.
              </p>

              {/* Email Input */}
              <label className="block text-gray-700 text-sm mb-1">EMAIL</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded-md mb-4"
              />

              {/* Lookup Button */}
              <button className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600">
                LOOKUP EMAIL
              </button>
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
      </div>
      <Link to={`/join`}>
        <div className="px-6 py-2 flex flex-row rounded-[2px] w-[13%] items-center gap-2 relative mx-auto mb-40 cursor-pointer outline-orange-800 hover:bg-orange-800 hover:text-white text-orange-800 bg-transparent outline-2">
          <FaHome />
          <p>MAIN PAGE</p>
        </div>
      </Link>
      {/* Contact Modal */}
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}

      <MembershipFooter />
    </div>
  );
};

export default Login;
