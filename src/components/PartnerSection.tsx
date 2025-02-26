import styles from "../style";
import Button from "./Button";

const PartnerSection = () => {
  return (
    <section className="bg-[#1A1FA7] text-white pt-32 lg:pt-48 pb-12 relative grid grid-cols-1 lg:grid-cols-2">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className={`${styles.heading1} mb-8 text-center lg:text-left uppercase`}
        >
          Become a Partner
        </h2>
        <p className={`${styles.paragraph} font-normal leading-relaxed mb-4`}>
          At the core of Creative Hub Africa is collaboration. From being the
          conduit that connects local creatives to sharing information around
          the community, collaboration is where it all begins.
        </p>
        <p className={`${styles.paragraph}  font-normal leading-relaxed mb-4`}>
          Whether through events, mentorship, skill sharing, and more, there are
          many ways you can support Creative Hub Africa. We are always keen to
          hear from individuals and companies keen to partner with us.
        </p>
        <p className={`${styles.paragraph} font-normal leading-relaxed mb-4`}>
          If you would like to discuss becoming a partner, please email us at{" "}
          <a href="mailto:info@creative-edinburgh.com" className="underline">
            info@creative-edinburgh.com
          </a>
          .
        </p>
        <Button text="Become a partner" className="text-white" />
      </div>

      {/* Decorative Circles */}
      <div className="relative">
        <div className="absolute -top-16 left-[47%] w-[120px] h-[120px] bg-purple-400 rounded-full hidden lg:block"></div>
        <svg
          viewBox="0 0 304.343 675.885"
          preserveAspectRatio="xMinYMin meet"
          className="absolute z-10 top-[85%] right-20 w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] hidden lg:block fill-orange-500 rotate-100"
        >
          <path
            d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
            transform="translate(-557.701 -242.912)"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PartnerSection;
