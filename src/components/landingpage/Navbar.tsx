"use client";
import { useEffect, useState } from "react";
import { Logo } from "../../../public";
import { GiHamburgerMenu } from "react-icons/gi";

import MyDropDownLink from "./MyDropDownLink";
import Image from "next/image";
import { NavLinks } from "@/lib/data";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const NavLink = ({ children, href = "#" }: { children: any; href: string }) => (
  <Link
    href={href}
    className="text-base uppercase font-medium relative group block"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-tertiary transition-all duration-300 group-hover:w-full" />
  </Link>
);

interface MobileMenuItemProps {
  link: any;
  onLinkClick: () => void;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  link,
  onLinkClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (link.links.length > 0) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="flex flex-col text-white">
      {link.links.length === 0 ? (
        <Link
          className="uppercase hover:text-primary transition-colors duration-300 flex items-center justify-between"
          href={link.url}
          onClick={onLinkClick}
        >
          {link.title}
          <FaLongArrowAltRight className="text-white" />
        </Link>
      ) : (
        <div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={handleToggle}
          >
            <p>{link.title}</p>
            <span className="ml-2">
              {isExpanded ? (
                <IoIosArrowUp className="text-white" />
              ) : (
                <IoIosArrowDown className="text-white" />
              )}
            </span>
          </div>
          <div
            className={`flex flex-col gap-3 ml-8 overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
            }`}
          >
            {link.links.map((subLink: any) => (
              <Link
                key={subLink.id}
                className="uppercase hover:text-primary transition-colors duration-300"
                href={subLink.link}
                onClick={onLinkClick}
              >
                {subLink.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      <hr className="h-0.5 text-blue-100/20 mt-4" />
    </div>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`bg-secondary fixed inset-0 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onTransitionEnd={handleAnimationEnd}
    >
      <div className="flex flex-col gap-8 py-8 px-6">
        <div
          className="w-full flex justify-end lg:hidden cursor-pointer"
          onClick={onClose}
          role="button"
          aria-label="Close menu"
        >
          <IoCloseSharp size={30} className="text-white" />
        </div>
        <div className="grid gap-4">
          {NavLinks.map((link) => (
            <MobileMenuItem key={link.id} link={link} onLinkClick={onClose} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollPage = () => {
    if (window.scrollY >= 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const aboutLinks = [
    {
      id: 1,
      title: "What We Do",
      link: "/about-us/what-we-do",
    },
    {
      id: 2,
      title: "Our Team",
      link: "/about-us/team",
    },

    {
      id: 3,
      title: "Vision, Mission and Values",
      link: "/about-us/vision-and-mission",
    },
    {
      id: 4,
      title: "Code of Conduct",
      link: "/about-us/code-of-conduct",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/about-us/contact-us",
    },
  ];

  const membershipLinks = [
    {
      id: 1,
      title: "Business Directory",
      link: "/membership/members-library",
    },
  ];

  const eventsLinks = [
    {
      id: 1,
      title: "Book Tickets",
      link: "/events/book-tickets",
    },
    {
      id: 2,
      title: "Our Programme",
      link: "/events/our-programme",
    },
  ];

  const supportUsLinks = [
    {
      id: 1,
      title: "Become A Partner",
      link: "/support-us/become-a-partner",
    },
    {
      id: 2,
      title: "Become A Sponsor",
      link: "/support-us/become-a-sponsor",
    },
    {
      id: 3,
      title: "Support Our Community",
      link: "/support-us/support-our-community",
    },
  ];

  window.addEventListener("scroll", scrollPage);
  return (
    <>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false);
        }}
      />

      <nav
        className={`h-[120px] flex items-center px-4 lg:px-9 fixed top-0 left-0 right-0 ${
          isScrolled ? "bg-white" : "bg-transparent"
        } z-20`}
      >
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="Creative Hub Africa Logo"
              width={100}
              height={100}
            />
          </Link>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <GiHamburgerMenu size={30} />
          </div>
          <div className="hidden lg:flex items-end gap-8">
            <MyDropDownLink title="ABOUT US" links={aboutLinks} />
            {/* <MyDropDownLink title="MEMBERSHIP" links={membershipLinks} /> */}
            <NavLink href="/business-directory">Business Directory</NavLink>
            {/* <MyDropDownLink title="Events" links={eventsLinks} /> */}
            {/* <NavLink href="/awards">AWARDS</NavLink> */}
            {/* <NavLink href="#">FOR COMMUNITY</NavLink> */}
            <MyDropDownLink title="SUPPORT US" links={supportUsLinks} />

            <div className="flex items-end gap-6 py-2">
              <a
                href="https://twitter.com/creativeedin"
                className="text-gray-600 hover:text-tertiary transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/CreativeEdinburgh/"
                className="text-gray-600 hover:text-tertiary transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/creativeedinburgh/"
                className="text-gray-600 hover:text-tertiary transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <Link
              href={`/join`}
              className="px-6 py-2 rounded cursor-pointer bg-cyan-800 text-white "
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
