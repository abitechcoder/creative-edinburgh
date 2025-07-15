// components/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
import { Partner } from "@/components/Partner";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide Navbar for any route starting with "/dashboard"
  const hideNavbar = pathname.startsWith("/app");

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && (
        <>
          <Partner />
          <Footer />
        </>
      )}
    </>
  );
}
