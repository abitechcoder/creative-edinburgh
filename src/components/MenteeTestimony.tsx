import styles from "../style";

const MenteeTestimony = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 mx-auto bg-green-800 py-12 lg:py-24 relative overflow-hidden">
      <div className="max-w-lg px-6">
        <p
          className={`${styles.paragraph} text-white font-bold leading-relaxed mb-4`}
        >
          "Mentoring was a boost of energy that will help me continue developing
          my project. It was crucially important for me at the very beginning of
          my project to be included in the program. Now I have more connections,
          a clear perspective on what to do next."
        </p>
      </div>

      {/* Background Design */}
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 467.23 585.48"
          preserveAspectRatio="xMinYMin meet"
          className="absolute z-10 top-0 -right-20 lg:-top-60 lg:right-10 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-[60deg] text-primary"
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
          className="absolute z-10 top-0 -right-20 lg:-top-10 lg:-right-20 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-180 text-blue-600"
          fill="currentColor"
        >
          <path
            d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
            transform="translate(-853.47 -109.457)"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default MenteeTestimony;
