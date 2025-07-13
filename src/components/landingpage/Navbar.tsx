"use client";
import { useEffect, useState } from "react";
import { Logo } from "../../../public";
import { GiHamburgerMenu } from "react-icons/gi";

import MyDropDownLink from "./MyDropDownLink";
import Image from "next/image";
import { NavLinks } from "@/lib/data";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case user reloads on scrolled position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false);
        }}
      />

      <nav
        className={`h-[120px] flex items-center px-4 lg:px-9 fixed top-0 left-0 right-0 shadow-lg ${
          isScrolled ? "bg-white" : "bg-transparent"
        } z-20`}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-8">
            <Link href="/">
              <Image
                src={Logo}
                alt="Creative Hub Africa Logo"
                width={100}
                height={100}
              />
            </Link>
            <Link href="/">
              <Image
                src={"/eu.PNG"}
                alt="Creative Hub Africa Logo"
                width={100}
                height={100}
                className=""
              />
            </Link>
          </div>
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
            {/* <MyDropDownLink title="SUPPORT US" links={supportUsLinks} /> */}

            <div className="flex items-end gap-6 py-2">
              <a
                href="https://twitter.com/creativeedin"
                className="text-gray-600 hover:text-tertiary transition-colors duration-300"
                aria-label="Twitter (X)"
              >
                <FaXTwitter size={22} />
              </a>

              <a
                href="https://www.linkedin.com/company/creative-edinburgh/"
                className="text-gray-600 hover:text-tertiary transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.facebook.com/CreativeEdinburgh/"
                className="text-gray-600 hover:text-tertiary transition-colors duration-300"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/creativeedinburgh/"
                className="text-gray-600 hover:text-tertiary transition-colors duration-300"
              >
                <FaInstagram size={22} />
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
