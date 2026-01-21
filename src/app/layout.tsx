// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./LandingPageLayout";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salone Bizness Directory",
  description: `Sierra Leone Bizness Directory is your premier digital gateway to
            the nation's most trusted bizness directory, investment
            opportunities, and SME growth tools. Whether you are a local
            entrepreneur or a global investor, unlock the potential of West
            Africa's next rising star.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Salone Bizness Directory</title>
          <link rel="icon" href="/logo.png" />
        </head>
        <body className={inter.className}>
          <ClientLayout>{children}</ClientLayout>
          <ToastContainer position="bottom-right" theme="dark" />
        </body>
      </html>
    </ClerkProvider>
  );
}
