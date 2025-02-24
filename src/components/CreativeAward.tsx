import { PeopleNetworking } from "../assets";
import styles from "../style";

const CreativeAward = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#A98AFF] text-black py-24 gap-5 overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          2024 CREATIVE EDINBURGH AWARDS
        </h2>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          Meet the 2024 Creative Edinburgh Awards Finalists! Nominations for the
          Awards opened earlier this year, and we were excited to see the
          creative community sending in applications for themselves, their
          peers, and projects that have inspired them over the past 12 months.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          Nominations could be submitted into any of the ten Awards Categories,
          including two new categories for this year - the Development Award and
          the Festivals Award.
        </p>
        <a
          href="#"
          className={`${styles.paragraph} leading-relaxed mt-4 border-b-2 border-pink-400 text-black`}
        >
          See all the shortlisted finalists across the ten categories in the
          2024 Creative Edinburgh Awards here!
        </a>
      </div>

      {/* Right Image */}
      <div className="relative ps-6 md:w-1/2 ">
        <svg
          viewBox="0 0 304.343 675.885"
          preserveAspectRatio="xMinYMin meet"
          className="absolute z-15 top-[10px] -right-[100px] lg:-top-[22rem] lg:-right-[25rem] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] hidden lg:block fill-yellow-300 -rotate-45 "
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
          className="absolute z-15 bottom-[-60px] -left-[125px] lg:-bottom-[32rem] lg:left-[-140px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] fill-pink-300 rotate-80"
        >
          <path
            d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
            transform="translate(-557.701 -242.912)"
          />
        </svg>

        {/* Image Container */}
        <div className="relative ">
          <img
            src={PeopleNetworking}
            alt="Be a Mentor"
            className="w-full h-full object-cover rounded-s-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeAward;
