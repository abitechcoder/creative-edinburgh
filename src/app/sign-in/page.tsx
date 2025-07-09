"use client";
import ContactModal from "@/components/landingpage/ContactModal";
import Link from "next/link";

import { useState } from "react";

import { FaCalendar, FaHome } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role && role !== undefined) {
      router.push(`app/${role}`);
    }
  }, [user, router]);
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
          <SignIn.Root>
            <SignIn.Step
              name="start"
              className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md gap-4 flex flex-col"
            >
              <h2 className="text-lg font-semibold mb-3">MEMBER LOG IN</h2>
              <p className="text-sm text-gray-600 mb-4">
                We'll find the membership by looking up your email address.
                Enter the email address associated with this organization.
              </p>
              <Clerk.GlobalError className="text-sm text-red-400" />
              <Clerk.Field name="identifier" className="flex flex-col gap-2">
                <Clerk.Label className="text-sm text-gray-500 font-bold">
                  Username
                </Clerk.Label>
                <Clerk.Input
                  type="text"
                  required
                  className="p-2 rounded-md ring-1 ring-gray-300"
                />
                <Clerk.FieldError className="text-xs text-red-400" />
              </Clerk.Field>
              <Clerk.Field name="password" className="flex flex-col gap-2">
                <Clerk.Label className="text-sm text-gray-500 font-bold">
                  Password
                </Clerk.Label>
                <Clerk.Input
                  type="password"
                  required
                  className="p-2 rounded-md ring-1 ring-gray-300"
                />
                <Clerk.FieldError className="text-xs text-red-400" />
              </Clerk.Field>
              <SignIn.Action
                submit
                className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 cursor-pointer"
              >
                Sign In
              </SignIn.Action>
            </SignIn.Step>
          </SignIn.Root>
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
