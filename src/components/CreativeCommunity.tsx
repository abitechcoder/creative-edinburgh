import styles from "../style";

const CreativeCommunity = () => {
  return (
    <div className="relative bg-primary py-10 lg:py-20 flex flex-col lg:flex-row lg:items-center px-6 overflow-hidden">
      <div className="w-full">
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed `}
        >
          We have over 6000 members spanning all the creative industries,
          including those working in visual arts, performing arts, design,
          craft, literature and publishing, architecture, advertising and
          marketing, software and digital development, dance, comedy,
          consultancy, curation, and museums and galleries. 90% of our members
          are early to mid-career creative professionals. 69% are under 45 years
          old.
        </p>
      </div>

      {/* Background Graphics */}
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 467.23 585.48"
          preserveAspectRatio="xMinYMin meet"
          className="absolute z-10 -top-64 -right-5 lg:-top-96 lg:right-10 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-[60deg] text-red-500 hidden md:block"
          fill="currentColor"
        >
          <path
            d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
            transform="translate(-853.47 -109.457)"
          ></path>
        </svg>
        <svg
          viewBox="0 0 467.23 585.48"
          preserveAspectRatio="xMinYMin meet"
          className="absolute z-10 top-15 -right-15 lg:-top-5 lg:-right-22 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-180 text-white hidden md:block"
          fill="currentColor"
        >
          <path
            d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
            transform="translate(-853.47 -109.457)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CreativeCommunity;
