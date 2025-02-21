import { Mentoring } from "../assets";

const ConnectSection = () => {
  return (
    <section className="relative w-full flex justify-center py-12 lg:py-24 overflow-hidden">
      {/* Purple Arc - Top Right */}
      <svg
        viewBox="0 0 304.343 675.885"
        preserveAspectRatio="xMinYMin meet"
        className="absolute hidden lg:block z-15 top-[10px] -right-[100px] lg:-top-[-20px] lg:-right-[5px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] fill-[#a08cff] rotate-120 "
      >
        <path
          d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
          transform="translate(-557.701 -242.912)"
        />
      </svg>

      {/* Pink Arc - Bottom Left */}
      <svg
        viewBox="0 0 304.343 675.885"
        preserveAspectRatio="xMinYMin meet"
        className="absolute hidden lg:block z-15 bottom-[-60px] -left-[125px] lg:bottom-[-120px] lg:left-[-140px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] fill-[#ff8cb8] rotate-150"
      >
        <path
          d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
          transform="translate(-557.701 -242.912)"
        />
      </svg>

      {/* Center Circle */}
      <div className="absolute hidden lg:block top-15 left-[30%] -translate-x-1/2 -translate-y-10 w-20 h-20 lg:w-28 lg:h-28 bg-green-800 rounded-full z-15"></div>

      {/* Image Container */}
      <div className="relative w-[80%] max-w-5xl rounded-lg overflow-hidden shadow-lg z-10">
        <img
          src={Mentoring}
          alt="Mentorring"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ConnectSection;
