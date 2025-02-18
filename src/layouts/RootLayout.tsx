import { Outlet } from "react-router"
import { Navbar, Footer } from "../components"
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { NavLinks } from "../constant";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    {/* Purple Arc */}
    <svg viewBox="0 0 304.343 675.885" preserveAspectRatio="xMinYMin meet" className="absolute z-10 top-[600px] right-[50%] lg:top-[550px] lg:right-[10%] w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] fill-[#a08cff] rotate-90"><path d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1" transform="translate(-557.701 -242.912)"></path></svg>
      {isMenuOpen && (<div className="bg-secondary lg:hidden h-screen fixed left-0 top-0 bottom-0 right-0 w-full z-50">
        <div className="flex flex-col gap-8 py-8 px-4">
          <div className="w-full flex justify-end lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <IoCloseSharp size={40} className="text-white" />
          </div>
          <div className="grid gap-8">
            {NavLinks.map((link) => <div className="flex gap-2 items-center text-white text-2xl font-bold">
              <div key={link.id}><p>{link.title}</p></div></div>)}
          </div>
        </div>
      </div>)}
      <div className="bg-[#fcf9f9]">
        <Navbar setIsMenuOpen={setIsMenuOpen}/>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default RootLayout