import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaVimeo } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0B18] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Contact Section */}
        <div>
          <h2 className="text-[#b0a3f9] font-bold text-lg">CONTACT US</h2>
          <p className="mt-2 text-white font-medium w-[65%]">Creative Edinburgh LTD c/o CodeBase 37a Castle Terrace Edinburgh EH1 2EL</p>
        </div>

        {/* General Enquiries Section */}
        <div>
          <h2 className="text-[#b0a3f9] font-bold text-lg">GENERAL ENQUIRIES</h2>
          <p className="mt-2 relative inline-block">
            <a href="mailto:info@creative-edinburgh.com" className="text-white font-medium relative group">
              info@creative-edinburgh.com
              <span className="absolute right-0 top-6 w-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
          </p>

          {/* Social Media Links */}
          <h2 className="text-[#b0a3f9] font-bold text-lg mt-10">FOLLOW US</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><FaVimeo size={20} /></a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Terms & Policies Section */}
        <div>
          <h2 className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-[#b0a3f9] text-lg">Terms Of Use</h2>
          <p className="mt-2">
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-[#b0a3f9] text-lg">Cookie Policy</a>
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-[#b0a3f9] text-lg">Privacy Policy</a>
          </p>
        </div>

        {/* Legal Section */}
        <div>
          <p className="text-lg font-medium">Registered Charity SC052838</p>
          <p className="mt-2 text-lg font-medium">
            Company Limited By Guarantee And Registered In Scotland SC245233
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
