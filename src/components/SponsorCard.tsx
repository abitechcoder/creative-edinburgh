import { useState } from "react";
import { SponsorCardProps } from "../type";

const SponsorCard = ({
  imageSrc,
  title,
  price,
  benefits,
  buttonText,
  heading,
  heading2,
  additionalBenefits = [],
}: SponsorCardProps) => {
  // Individual state for each card
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-10 rounded-2xl max-w-lg mx-auto transition-all duration-300 ">
      {/* Image Section */}
      <div className="rounded-lg overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-60" />
      </div>

      {/* Content Section */}
      <div className="mt-6 text-center">
        <h2 className="text-xl lg:text-2xl font-extrabold text-black">
          {title}
          {price && ` - ${price}`}
        </h2>

        {/* Display Heading if Available */}
        {heading && <p className="mt-5 text-black text-left">{heading}</p>}

        <ul className="text-left mt-4 space-y-4 text-black font-semibold">
          {benefits.slice(0, 3).map((benefit, index) => (
            <li key={`benefit-${index}`} className="flex items-start gap-2">
              <span className="text-black text-lg">•</span>
              {benefit}
            </li>
          ))}
        </ul>

        {/* Show expanded content if isExpanded is true */}
        {isExpanded && (
          <>
            {/* Remaining Benefits */}
            <ul className="text-left mt-4 space-y-4 text-black font-semibold">
              {benefits.slice(3).map((benefit, index) => (
                <li
                  key={`benefit-${index + 3}`}
                  className="flex items-start gap-2"
                >
                  <span className="text-black text-lg">•</span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Display Heading2 if Available */}
            {heading2 && (
              <p className="mt-4 text-black font-bold lg:text-left">
                {heading2}
              </p>
            )}

            {/* Additional Benefits */}
            {additionalBenefits.length > 0 && (
              <ul className="text-left mt-4 space-y-4 text-black font-semibold">
                {additionalBenefits.map((benefit, index) => (
                  <li
                    key={`additional-${index}`}
                    className="flex items-start gap-2"
                  >
                    <span className="text-black text-lg">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {/* Show More / Show Less Button (Always at the bottom) */}
        {(benefits.length > 3 || heading2 || additionalBenefits.length > 0) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center mx-auto mt-4 text-black font-medium gap-2 hover:text-red-500"
          >
            <span className="text-lg hover:bg-red-500">
              {isExpanded ? "-" : "+"}
            </span>
            {isExpanded ? " Show less" : " Show more"}
          </button>
        )}

        {/* Call to Action Button */}
        <button className="bg-green-800 text-white w-full mt-6 py-3 rounded-lg font-bold">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SponsorCard;
