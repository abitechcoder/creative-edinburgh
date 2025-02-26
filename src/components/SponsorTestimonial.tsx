import styles from "../style";

const SponsorTestimonial = () => {
  return (
    <section className="relative bg-white py-12 px-6  flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-black ">
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
    </section>
  );
};

export default SponsorTestimonial;
