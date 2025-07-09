"use client";

import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  // Define regex or conditions for pages where the back button should appear
  const showBackButton =
    /^\/app\/directories\/\d+$/.test(pathname) ||
    pathname === "/app/admin/reports";

  return (
    <div className="flex items-center justify-between p-4">
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={() => router.back()}
          className="hover:cursor-pointer flex items-center gap-4"
        >
          <div className="bg-secondary p-2 rounded-full">
            <FaArrowLeft className="text-white" size={16} />
          </div>
        </button>
      )}

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">
            {user?.fullName}
          </span>
          <span className="text-[10px] text-gray-500 text-right">
            {user?.publicMetadata?.role as string}
          </span>
        </div>

        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
