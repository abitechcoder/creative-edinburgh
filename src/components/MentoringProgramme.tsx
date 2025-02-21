const MentoringProgramme = () => {
  return (
    <header className="relative lg:h-screen overflow-hidden">
      {/* Yellow Arc */}
      <svg
        viewBox="0 0 467.23 585.48"
        preserveAspectRatio="xMinYMin meet"
        className="fill-red-500 absolute z-10 top-0 -right-20 lg:-top-30 lg:-right-30 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-90"
      >
        <path
          d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
          transform="translate(-853.47 -109.457)"
        ></path>
      </svg>
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
        {/* Left Column */}
        <div className="lg:col-span-3 flex flex-col justify-end px-4 lg:px-8">
          <h1
            className={`text-5xl lg:text-8xl font-bold text-black mt-[30%] lg:mt-0 lg:mb-10 uppercase`}
          >
            Creative Edinburgh Mentoring Programme
          </h1>
        </div>
      </div>
    </header>
  );
};

export default MentoringProgramme;
