import { BecomeMentor } from "../assets";
import styles from "../style";
import Button from "./Button";

const BeAMentor = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-[#A895FF] py-12 lg:py-20 overflow-hidden">
      {/* Left Text Section */}
      <div className="px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-5">
          I WANT TO BE A MENTOR
        </h2>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4 max-w-lg`}
        >
          Find out everything you need to know about becoming a trained mentor
          as part of the Creative Edinburgh Mentoring Programme
        </p>
        <Button text="Learn more about becoming a Creative Edinburgh mentor" />
      </div>

      {/* Right Image Section */}
      <div className="relative ps-6">
        <svg
          viewBox="0 0 304.343 675.885"
          preserveAspectRatio="xMinYMin meet"
          className="absolute z-15 top-[10px] -right-[100px] lg:-top-[20rem] lg:-right-[27rem] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] hidden lg:block fill-yellow-300 -rotate-45 "
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
          className="absolute z-15 bottom-[-60px] -left-[125px] lg:-bottom-[30rem] lg:left-[-140px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] fill-pink-300 rotate-90"
        >
          <path
            d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
            transform="translate(-557.701 -242.912)"
          />
        </svg>

        {/* Image Container */}
        <div className="relative ">
          <img
            src={BecomeMentor}
            alt="Be a Mentor"
            className="w-full h-full object-cover rounded-s-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BeAMentor;
