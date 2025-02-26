import styles from "../style";
import Button from "./Button";

const OurEventProgramme = () => {
  return (
    <header className="relative overflow-hidden py-10 lg:py-32">
      {/* Yellow Arc */}
      <svg
        viewBox="0 0 467.23 585.48"
        preserveAspectRatio="xMinYMin meet"
        className="fill-purple-500 hidden lg:block absolute z-10 top-0 -right-20 lg:-top-45 lg:right-5 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-[60deg]"
      >
        <path
          d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
          transform="translate(-853.47 -109.457)"
        ></path>
      </svg>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Column */}
        <div className="flex flex-col justify-end px-4 lg:px-6">
          <h1
            className={`${styles.heading1} text-black mb-8 text-center lg:text-left uppercase`}
          >
            Our events programme
          </h1>
          <p
            className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
          >
            We run a variety of events across the year to serve our members. Our
            aim is to ensure every event is beneficial and serves the creative
            community.
          </p>
          <p
            className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
          >
            Watch our past events{" "}
            <a href="#" className="border-b-2 border-pink-300">
              here
            </a>{" "}
            and find out more about the events we run below. Past talks
            available to watch include self-publishing and freelance arts,
            dismantling obstacles to accessibility, creatives in an era of
            climate emergency, and tax returns are changing, are you ready?
          </p>
          <p
            className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
          >
            If you have been to any of our events in the past few months, please
            help us improve how we run them by submitting your feedback{" "}
            <a href="#" className="border-b-2 border-pink-300">
              here.
            </a>
          </p>
          <Button text="Submit Feedback" />
        </div>
        <div className="relative">
          <div className="absolute top-[50%] left-20 w-[120px] h-[120px] bg-yellow-400 rounded-full hidden lg:block"></div>
          <svg
            viewBox="0 0 304.343 675.885"
            preserveAspectRatio="xMinYMin meet"
            className="absolute z-10 top-[80%] -right-30 w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] hidden lg:block fill-pink-300 rotate-[90deg]"
          >
            <path
              d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
              transform="translate(-557.701 -242.912)"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default OurEventProgramme;
