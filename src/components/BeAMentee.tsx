import { BecomeMentee } from "../assets";
import styles from "../style";
import Button from "./Button";

const BeAMentee = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-pink-300 py-12 lg:py-20 overflow-hidden">
      {/* Left Side - Text Content */}
      <div className=" px-6 text-black">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-5">
          I WANT TO BE A MENTEE
        </h2>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4 max-w-lg`}
        >
          Find out everything you need to know about becoming a mentee as part
          of the Creative Edinburgh Mentoring Programme.
        </p>
        <Button text="Start your journey to becoming a mentee" />
      </div>

      {/* Right Side - Image */}
      <div className="relative ps-6">
        <svg
          viewBox="0 0 304.343 675.885"
          preserveAspectRatio="xMinYMin meet"
          className="absolute z-10 top-[75%] -right-45 w-[200px] h-[200px] lg:w-[600px] lg:h-[600px] hidden lg:block fill-yellow-300 rotate-60"
        >
          <path
            d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
            transform="translate(-557.701 -242.912)"
          ></path>
        </svg>
        <div className="container mx-auto py-16 flex flex-col-reverse lg:flex-row">
          <div className="relative space-y-4 flex-1">
            <svg
              viewBox="0 0 137.169 137.76"
              preserveAspectRatio="xMinYMin meet"
              className="fill-white z-10 absolute w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] left-[10%] -top-9 lg:-top-16"
            >
              <path
                d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
                transform="translate(-947.774 -832.697)"
              ></path>
            </svg>
            <img
              src={BecomeMentee}
              alt="Be a Mentee"
              className="w-full h-full object-cover rounded-s-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeAMentee;
