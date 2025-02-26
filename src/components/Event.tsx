import { PeopleNetworking } from "../assets";
import Button from "../components/Button";
import styles from "../style";

const Event = () => {
  return (
    <section className="flex flex-col gap-5 lg:flex-row relative pt-32 lg:pt-48 pb-12 bg-gray-50 ">
      <div className="lg:w-1/2 mx-6">
        <h2
          className={`${styles.heading1} text-black mb-8 text-center lg:text-left uppercase`}
        >
          EVENTS
        </h2>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-2`}
        >
          We offer a variety of in-person and online events, all of which
          provide the opportunity to connect, collaborate and get inspired.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-2`}
        >
          From casual monthly meet-ups to lively evening parties, careers and
          skills workshops to expert panels, we have something for every
          creative in Sierraleone.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-2`}
        >
          All our events are listed on our Eventbrite page and can be accessed
          via the 'Browse All' link below.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-2`}
        >
          We have recorded some of our past events and these are available to
          watch{" "}
          <a href="#" className="text-blue-500 underline">
            here
          </a>
          .
        </p>
        <Button text="BROWSE ALL" />
      </div>
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
        <svg
          viewBox="0 0 304.343 675.885"
          preserveAspectRatio="xMinYMin meet"
          className="absolute hidden lg:block z-10 top-[275px] right-[40%] lg:top-[490px] lg:right-[20%] w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] fill-orange-500 rotate-[90deg] "
        >
          <path
            d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
            transform="translate(-557.701 -242.912)"
          ></path>
        </svg>

        <div className="relative space-y-4 flex-1">
          <svg
            viewBox="0 0 137.169 137.76"
            preserveAspectRatio="xMinYMin meet"
            className="fill-purple-500 hidden lg:block z-10 absolute w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] left-[40%] -top-10 lg:-top-16 "
          >
            <path
              d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
              transform="translate(-947.774 -832.697)"
            ></path>
          </svg>
          <div className="ps-6">
            <img
              src={PeopleNetworking}
              alt="People networking"
              className="w-full rounded-s-2xl shadow-lg h-[300px] lg:h-[500px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
