import styles from "../style";

const BecomeASponsporTestimonial = () => {
  return (
    <div className="bg-white py-28 px-6 flex justify-end">
      <div className="max-w-lg ">
        <h2 className="text-3xl lg:text-5xl font-bold text-black">
          SPONSOR TESTIMONIAL
        </h2>
        <p
          className={`${styles.paragraph} text-gray-700 font-normal leading-relaxed mt-5`}
        >
          "We were able to connect with new audiences and gain new insights into
          perceptions and barriers to connecting with our own partners and
          organisation."
        </p>
      </div>
    </div>
  );
};

export default BecomeASponsporTestimonial;
