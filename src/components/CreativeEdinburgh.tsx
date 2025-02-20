import React from "react";
import { creativeEdinburgh } from "../constant";
import Button from "./Button";
import { WhatWeDoImage } from "../assets";
import styles from "../style";

const CreativeEdinburgh: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 py-6 lg:py-20">
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full pe-6 ">
        <img
          src={WhatWeDoImage}
          alt="Creative Edinburgh Event"
          className="w-full h-auto rounded-r-2xl shadow-lg "
        />
      </div>

      {/* Right Text Section */}
      <div className="lg:w-1/2 w-full px-6">
        <p
          className={`${styles.paragraph} text-gray-700 mb-5 font-medium leading-relaxed text-xl`}
        >
          <span className="font-bold"> {creativeEdinburgh.title}</span>{" "}
          {creativeEdinburgh.description}
        </p>

        {/* Advancement of Arts and Culture */}
        <h3 className={`${styles.paragraph} text-black mb-5 font-bold text-xl`}>
          {creativeEdinburgh.subheading1}
        </h3>
        <ul
          className={`${styles.paragraph} text-gray-700 mb-5 font-medium list-disc mt-4 space-y-3 px-5 `}
        >
          {creativeEdinburgh.activities1.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>

        {/* Support and Opportunities */}
        <h3 className={`${styles.paragraph} text-black mb-5 font-bold text-xl`}>
          {creativeEdinburgh.subheading2}
        </h3>
        <ul
          className={`${styles.paragraph} text-gray-700 mb-5 font-medium  list-disc mt-4 space-y-3 px-5 `}
        >
          {creativeEdinburgh.activities2.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>

        {/* Advancement of Education */}
        <h3 className={`${styles.paragraph} text-black mb-5 font-bold text-xl`}>
          {creativeEdinburgh.educationHeading}
        </h3>
        <p className={`${styles.paragraph} text-black  font-medium   `}>
          {creativeEdinburgh.educationIntro}
        </p>
        <ul
          className={`${styles.paragraph} text-gray-700 mb-5 font-medium  list-disc mt-4 space-y-3 px-5 `}
        >
          {creativeEdinburgh.activities3.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <Button text="Support us here" onClick={() => console.log("Clicked")} />
      </div>
    </div>
  );
};

export default CreativeEdinburgh;
