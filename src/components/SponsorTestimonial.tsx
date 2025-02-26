import styles from "../style";

const SponsorTestimonial = () => {
  return (
    <section className="relative bg-white py-28 px-6  flex items-center">
      <div className="max-w-md">
        <h2 className=" text-4xl lg:text-5xl font-bold text-black  ">
          SPONSOR TESTIMONIAL
        </h2>
        <p
          className={`${styles.paragraph} text-gray-800 font-normal leading-relaxed mt-5`}
        >
          "The Creative Hub Africa team is made up of positive people, who bring
          energy, thoughtfulness and rigorous planning to their partnership
          projects."
        </p>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full flex justify-end">
        <div className="relative w-64 h-64">
          {/* <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full clip-path-custom"></div> */}
        </div>
      </div>
    </section>
  );
};

export default SponsorTestimonial;
