import { useState } from 'react';
import { Logo } from '../assets';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router";
import MyDropDownLink from "./MyDropDownLink";

const NavLink = ({ children, href = "#" }: { children: any; href: string }) => (
  <Link
    to={href}
    className="text-base uppercase font-medium relative group block"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-tertiary transition-all duration-300 group-hover:w-full" />
  </Link>
);

const Navbar = ({ setIsMenuOpen }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      title: "Vision, mission and values",
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
      title: "Members Directory",
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

  window.addEventListener("scroll", scrollPage);
  return (
    <nav className={`h-[120px] flex items-center px-4 lg:px-9 fixed top-0 left-0 right-0 ${isScrolled ? "bg-white" : "bg-transparent"} z-20`}>
      <div className="w-full flex items-center justify-between">
        <a href='/' >
          <img src={Logo} alt="Creative Hub Africa Logo" className='h-[70px] lg:h-[100px]' />
        </a>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <GiHamburgerMenu size={30} />
        </div>
        <div className="hidden lg:flex items-end gap-8">
          <MyDropDownLink title="ABOUT US" links={aboutLinks} />
          <MyDropDownLink title="MEMBERSHIP" links={membershipLinks} />
          <NavLink href="/mentoring">MENTORING</NavLink>
          <MyDropDownLink title="Events" links={eventsLinks} />
          <NavLink href="#">AWARDS</NavLink>
          <NavLink href="#">FOR COMMUNITY</NavLink>
          <NavLink href="#">SUPPORT US</NavLink>

          <div className="flex items-end gap-6">
            <a
              href="https://twitter.com/creativeedin"
              className="text-gray-600 hover:text-tertiary transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/CreativeEdinburgh/"
              className="text-gray-600 hover:text-tertiary transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/creativeedinburgh/"
              className="text-gray-600 hover:text-tertiary transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/creativeedinburgh/"
              className="text-gray-600 hover:text-tertiary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="31.866"
                height="40.143"
                viewBox="0 0 31.866 40.143"
              >
                <g
                  id="Grupo_1225"
                  data-name="Grupo 1225"
                  transform="translate(0 -0.001)"
                >
                  <g
                    id="Grupo_967"
                    data-name="Grupo 967"
                    transform="translate(0 0)"
                  >
                    <g
                      id="Grupo_969"
                      data-name="Grupo 969"
                      transform="translate(0 26.532)"
                    >
                      <g
                        id="Grupo_967-2"
                        data-name="Grupo 967"
                        transform="translate(0)"
                      >
                        <path
                          id="Caminho_254"
                          data-name="Caminho 254"
                          d="M5382.428,4612.549h-4.6a13.6,13.6,0,0,1,13.611-13.611v4.6a9.009,9.009,0,0,0-9.01,9.009Z"
                          transform="translate(-5377.826 -4598.938)"
                        ></path>
                      </g>{" "}
                      <g
                        id="Grupo_968"
                        data-name="Grupo 968"
                        transform="translate(18.254)"
                      >
                        <path
                          id="Caminho_255"
                          data-name="Caminho 255"
                          d="M5516.053,4612.549h-4.6a9.009,9.009,0,0,0-9.01-9.009v-4.6a13.6,13.6,0,0,1,13.611,13.611Z"
                          transform="translate(-5502.441 -4598.938)"
                        ></path>
                      </g>
                    </g>{" "}
                    <g
                      id="Grupo_973"
                      data-name="Grupo 973"
                      transform="translate(6.076)"
                    >
                      <g
                        id="Grupo_971"
                        data-name="Grupo 971"
                        transform="translate(0 0)"
                      >
                        <g id="Grupo_970" data-name="Grupo 970">
                          <path
                            id="Caminho_256"
                            data-name="Caminho 256"
                            d="M5439.015,4427.666h-4.6a5.256,5.256,0,1,0-10.511,0h-4.6a9.857,9.857,0,1,1,19.715,0Z"
                            transform="translate(-5419.3 -4417.808)"
                          ></path>
                        </g>
                        <path
                          id="Caminho_257"
                          data-name="Caminho 257"
                          d="M5434.413,4516.8a5.256,5.256,0,1,1-10.511,0h-4.6a9.857,9.857,0,1,0,19.715,0Z"
                          transform="translate(-5419.3 -4502.296)"
                        ></path>
                      </g>{" "}
                      <g
                        id="Grupo_972"
                        data-name="Grupo 972"
                        transform="translate(7.536 9.857)"
                      >
                        <rect
                          id="Retângulo_584"
                          data-name="Retângulo 584"
                          width="4.643"
                          height="4.643"
                          rx="2.321"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
