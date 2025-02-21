import { Link, Outlet } from "react-router"
import { Navbar, Footer } from "../components"
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { NavLinks } from "../constant";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && (<div className="bg-secondary overflow-y-scroll lg:hidden h-screen fixed left-0 top-0 bottom-0 right-0 w-full z-50">
        <div className="flex flex-col gap-8 py-8 px-4">
          <div className="w-full flex justify-end lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <IoCloseSharp size={40} className="text-white" />
          </div>
          <div className="grid gap-8">
            {NavLinks.map((link) => <div className="flex gap-2 items-center text-white text-2xl font-bold">
              <div key={link.id}>
                {
                  link.links.length === 0 ? (<Link className="uppercase hover:text-primary" to={link.url}>{link.title}</Link>) : (
                    <div>
                      <p>{link.title}</p>
                      <div className="flex flex-col gap-3 ml-8 py-4">
                        {link.links.map((sub_link) => <Link key={sub_link.id} className="uppercase hover:text-primary" to={sub_link.link}>{sub_link.title}</Link>)}
                      </div>
                    </div>
                  )
                }
              </div></div>)}
          </div>
        </div>
      </div>)}
      <div className="bg-[#fcf9f9]">
        <Navbar setIsMenuOpen={setIsMenuOpen} />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default RootLayout