import { useState } from "react";
import styles from "../style";
import { CreativeCirclesProps } from "../type";
import { Minus, Plus } from "lucide-react";

const OurProgrammeCard = ({
  imageSrc,
  title,
  description,
  description2,
  reverse = false,
  hasToggle = false,
  toggleTitle,
  toggleContent,
  toggleLinkText,
  toggleLinkHref,
}: CreativeCirclesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-6 py-12 lg:py-24`}
    >
      {/* Image Section */}
      <div className={`relative w-full md:w-1/2 ${reverse ? "ps-6" : "pe-6"}`}>
        <img
          src={imageSrc}
          alt="Creative Circles Event"
          className={` ${reverse ? " rounded-s-2xl" : "rounded-e-2xl"} h-[300px] lg:h-[550px] object-cover object-center w-full`}
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 px-6">
        <h2 className="text-2xl lg:text-4xl font-bold uppercase">{title}</h2>
        <p
          className={`${styles.paragraph} text-gray-800 font-normal leading-relaxed mt-4`}
        >
          {description}
        </p>
        <p
          className={`${styles.paragraph} text-gray-800 font-normal leading-relaxed mt-4`}
        >
          {description2}
        </p>

        {/* Expandable Section - Always Visible Border */}
        {hasToggle && (
          <div
            className={`p-4 mt-6 border-y-2  border-gray-300 ${
              isOpen ? "border-b-red-500" : ""
            }`}
          >
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold">{toggleTitle}</h2>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-red-500 rounded-full"
              >
                {isOpen ? (
                  <Minus className="text-black" />
                ) : (
                  <Plus className="text-black" />
                )}
              </button>
            </div>

            {isOpen && (
              <p className="text-gray-700 mt-2 text-base">
                {toggleContent}{" "}
                {toggleLinkText && (
                  <a
                    href={toggleLinkHref}
                    className="text-black underline hover:text-orange-600 hover:underline"
                  >
                    {toggleLinkText}
                  </a>
                )}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProgrammeCard;
