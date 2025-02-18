import React from "react";
import { ContactTeam } from "../components";
import styles from "../style";

const ContactUs: React.FC = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-16 bg-gray-50">
        <div className="max-w-lg">
          <h1
            className={`text-5xl lg:text-7xl font-extrabold text-black mb-10 uppercase  `}
          >
            CONTACT US
          </h1>
          <p
            className={`${styles.paragraph} text-black font-normal mt-5 leading-relaxed`}
          >
            If your message requires an urgent response, please contact
            <a href="#" className="text-blue-500 font-medium ml-1">
              info@creative-edinburgh.com
            </a>
            , where it can be forwarded to the appropriate Creative Edinburgh
            team member who will be able to assist you.
          </p>
        </div>

        {/* Right Section - Smiley Graphic */}
        <div className="relative w-80 h-80 mt-10 md:mt-0">
          {/* Eyes */}
          <div className="absolute w-12 h-12 bg-yellow-400 rounded-full top-10 left-16"></div>
          <div className="absolute w-12 h-12 bg-red-500 rounded-full top-10 right-16"></div>
          {/* Smile */}
          <div className="absolute w-72 h-36 border-8 border-l-transparent border-r-transparent border-b-purple-400 rounded-b-full bottom-0 left-4"></div>
        </div>
      </section>
      <ContactTeam />
    </div>
  );
};

export default ContactUs;
