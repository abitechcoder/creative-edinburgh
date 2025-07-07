import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10 lg:py-20 px-4 md:px-8">
      {/* Main Footer Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Contact Section */}

        <Image
          src="/eu.PNG"
          alt="Creative Hub Africa Logo"
          height={300}
          width={260}
          className=""
        />
        <div>
          <h2 className="text-white font-bold text-lg">CONTACT US</h2>
          <p className="mt-2 text-white cursor-pointer font-medium">
            23 Lumley Street, Freetown
          </p>
          <p className="mt-2 text-white cursor-pointer font-medium">
            +232 00 123 4567
          </p>
        </div>

        {/* General Enquiries Section */}
        <div>
          <h2 className="text-white font-bold text-lg">GENERAL ENQUIRIES</h2>
          <p className="mt-2 relative inline-block">
            <a
              href="mailto:connect@sierraleonebusinessmarkit.com"
              className="text-white font-medium relative group"
            >
              connect
              <span className="absolute right-0 top-6 w-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
          </p>
        </div>
        <div>
          <h2 className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-white text-md">
            Terms Of Use
          </h2>
          <p className="mt-2">
            <a
              href="#"
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-white text-md"
            >
              Cookie Policy
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#"
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-white text-md"
            >
              Privacy Policy
            </a>
          </p>
        </div>
        {/* Policies Section */}
        <div className="text-md">
          <p className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-white">
            Registered Charity SC052838
          </p>
          <p className="mt-2 hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-white">
            Built by Millennial Sierra Leone
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/CreativeEdinburgh/"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/creative-edinburgh/"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/creativeedin"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/creativeedinburgh/"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* OTHER BUTTONS */}
          <Link
            href="#"
            className="bg-primary w-full text-center hover:bg-tertiary text-white px-8 py-5 text-md rounded-md transition-colors flex items-center justify-center h-[80px]"
          >
            List your Business
          </Link>

          <Link
            href="#"
            className="bg-white w-full text-center hover:bg-primary text-black px-8 py-5 text-md rounded-md transition-colors flex items-center justify-center h-[80px]"
          >
            Browse Investments
          </Link>

          <Link
            href="#"
            className="bg-tertiary w-full text-center hover:bg-primary text-white px-8 py-5 text-md rounded-md transition-colors flex items-center justify-center h-[80px]"
          >
            Contact our Team
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
