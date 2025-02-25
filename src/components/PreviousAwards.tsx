import React, { useState, useEffect } from "react";
import { CardImage, CardImage2, CardImage3 } from "../assets";
import { ArrowRight, ArrowLeft } from "lucide-react";

const awards = [
  { year: 2025, image: CardImage },
  { year: 2024, image: CardImage2 },
  { year: 2023, image: CardImage3 },
  { year: 2022, image: CardImage },
  { year: 2021, image: CardImage2 },
  { year: 2020, image: CardImage3 },
];

const PreviousAwards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalVisible, setTotalVisible] = useState(4);

  // Dynamically adjust totalVisible based on screen size
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setTotalVisible(2);
      else if (window.innerWidth < 1024) setTotalVisible(3);
      else setTotalVisible(4);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const handleNext = () => {
    if (currentIndex < awards.length - totalVisible) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-blue-900 py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-white text-2xl font-bold mb-8">PREVIOUS AWARDS</h2>

        <div className="relative flex justify-center gap-5">
          {awards
            .slice(currentIndex, currentIndex + totalVisible)
            .map((award, index) => (
              <div
                key={award.year}
                className={`relative group ${
                  index === totalVisible - 1
                    ? "w-[10%]" // Last image should always be small
                    : window.innerWidth < 640
                    ? index === 0
                      ? "w-[80%]" // First image on small screens
                      : "w-[20%]"
                    : window.innerWidth < 1024
                    ? index < 2
                      ? "w-[40%]" // First two images on medium screens
                      : "w-[20%]" // Last image on medium screens
                    : "w-[30%]" // Default for larger screens
                }`}
              >
                <div className="w-full h-[300px] rounded-lg overflow-hidden relative">
                  <img
                    src={award.image}
                    alt={`Award ${award.year}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Show Prev button on hover over the first image */}
                  {index === 0 && currentIndex > 0 && (
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={handlePrev}
                    >
                      <ArrowLeft size={30} />
                    </button>
                  )}

                  {/* Show Next button on hover over the last image */}
                  {index === totalVisible - 1 &&
                    currentIndex < awards.length - totalVisible && (
                      <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={handleNext}
                      >
                        <ArrowRight size={30} />
                      </button>
                    )}
                </div>

                <h3 className="text-white text-xl lg:text-2xl font-bold mt-4 hover:text-yellow-400">
                  {award.year}
                  <span className="block h-1 w-10 bg-yellow-400 mt-1 mx-auto"></span>
                </h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousAwards;
