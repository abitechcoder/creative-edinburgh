const BecomeOurPartner = () => {
  return (
    <div className="w-full z-15 bg-[#2E2E99] hover:bg-pink-300 py-12 flex justify-center items-center overflow-hidden px-6 relative group transition-all duration-500 ease-in">
      <svg
        viewBox="0 0 137.169 137.76"
        preserveAspectRatio="xMinYMin meet"
        className="fill-yellow-300  z-10 absolute w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] 
        left-[20px] lg:left-[60px] top-[80%] lg:top-[70%] 
        opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-100"
      >
        <path
          d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
          transform="translate(-947.774 -832.697)"
        />
      </svg>

      {/* Right Arc (Hidden by Default, Appears on Hover) */}
      <svg
        viewBox="0 0 304.343 675.885"
        preserveAspectRatio="xMinYMin meet"
        className="absolute top-[25%] lg:top-[160%] right-5 translate-y-[-50%] 
        w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] fill-purple-500 rotate-150 lg:rotate-110  
        opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-100"
      >
        <path
          d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
          transform="translate(-557.701 -242.912)"
        />
      </svg>

      {/* Text Content */}
      <h2 className="text-white group-hover:text-[#2E2E99] text-xl md:text-3xl font-semibold relative transition-all duration-500 ease-in text-center">
        <span className="relative inline-block pb-2 before:absolute before:bottom-[-5px] before:left-0 before:right-0 before:mx-auto before:w-full before:h-[3px] before:bg-yellow-400 before:transition-all before:duration-500 ease-in">
          Become our partner and help support the creative community
        </span>
      </h2>
    </div>
  );
};

export default BecomeOurPartner;
