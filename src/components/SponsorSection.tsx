import { PeopleNetworking } from "../assets";
import styles from "../style";
import Button from "./Button";

const PartnerSection = () => {
  return (
    <section className="bg-[#1A1FA7] text-white mt-24 lg:mt-32   py-12 relative grid grid-cols-1 lg:grid-cols-2">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className={`${styles.heading1}  mb-8 text-center lg:text-left uppercase`}
        >
          Become a Sponsor
        </h2>
        <p className={`${styles.paragraph}  font-normal leading-relaxed mb-4`}>
          With more than <span className="font-bold">6,000 members</span>, we
          host the largest network of engaged creatives across Edinburgh. We
          bring together freelancers, students, and companies of all sizes and
          specialities, through our vibrant programme of events, career support
          and advocacy. Our mission is to support the city's diverse creative
          community at every stage of their career, future-proofing Edinburgh as
          the creative capital of the world. Read more about our sponsorship
          packages below and check out our{" "}
          <a href="#" className="underline font-semibold">
            Sponsorship Pack
          </a>
          .
        </p>{" "}
        <Button text="Become a partner" className="text-white" />
      </div>

      <div className="relative ps-6">
        <svg
          viewBox="0 0 304.343 675.885"
          preserveAspectRatio="xMinYMin meet"
          className="absolute z-10 top-[90%] right-45 w-[200px] h-[200px] lg:w-[600px] lg:h-[600px] hidden lg:block fill-orange-600 rotate-85"
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
              className="fill-white z-10 absolute w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] left-[45%] -top-9 lg:-top-16"
            >
              <path
                d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
                transform="translate(-947.774 -832.697)"
              ></path>
            </svg>
            <img
              src={PeopleNetworking}
              alt="Be a Mentee"
              className="w-full h-full object-cover rounded-s-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
