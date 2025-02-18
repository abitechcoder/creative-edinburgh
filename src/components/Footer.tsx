import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaVimeoV } from 'react-icons/fa';
import { edinburgh, tn } from '../assets';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0B18] text-white py-12 px-4 md:px-8">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Contact Section */}
        <div>
           <h2 className="text-[#b0a3f9] font-bold text-lg">CONTACT US</h2>
           <a href="https://www.google.com/maps/dir//CodeBase+Ltd,+37a+Castle+Terrace,+E…7991a24de13:0x5727e05b4321b9f6!2m2!1d-3.2017395!2d55.9471596!3e2?hl=pt-PT" target="_blank" className="mt-2 text-white cursor-pointer font-medium w-[65%]">Creative Edinburgh LTD c/o CodeBase 37a Castle Terrace Edinburgh EH1 2EL</a>
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
          <div className="mt-14">
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/creativeedin" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.facebook.com/CreativeEdinburgh/" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/creativeedinburgh/" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@creativeedinburgh1765/featured" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                <FaVimeoV size={24} />
              </a>
              <a href="https://www.linkedin.com/company/creative-edinburgh/" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div>
           <h2 className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-[#b0a3f9] text-md">Terms Of Use</h2>
           <p className="mt-2">
             <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-[#b0a3f9] text-md">Cookie Policy</a>
           </p>
           <p className="mt-2">
             <a href="#" className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-[#b0a3f9] text-md">Privacy Policy</a>
           </p>
         </div>
        {/* Policies Section */}
        <div className="text-md">
         <p className="hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-[#b0a3f9]">Registered Charity SC052838</p>
         <p className="mt-2 hover:text-yellow-400 transition-all duration-300 ease-in-out font-medium cursor-pointer text-[#b0a3f9]">
           Company Limited By Guarantee And Registered In Scotland SC245233
         </p>
       </div>
      </div>

      {/* Supporters Section */}
      <div className="max-w-7xl mt-12">
        <h3 className="text-lg font-semibold mb-6">OUR SUPPORTERS</h3>
        <div className="flex flex-wrap gap-8 items-center">
          <img
            src={tn}
            alt="Creative Scotland Logo"
            className="h-25 w-auto cursor-pointer object-contain"
          />
          <img
            src={edinburgh}
            alt="Edinburgh Council Logo"
            className="h-25 w-auto cursor-pointer object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-md">
          © {currentYear} Creative Edinburgh LTD
        </p>
        <div className="flex gap-4">
          <Link to="/donate" 
                className="bg-green-700 hover:bg-green-900 text-white px-8 py-5 text-md rounded-md transition-colors">
            Donate to Creative Edinburgh
          </Link>
          <Link to="/join" 
                className="bg-yellow-300 hover:bg-yellow-500 text-black px-8 py-5 text-md rounded-md transition-colors">
            Join us as a member
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;