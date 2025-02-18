import styles from "../style";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-50 py-16 relative px-6">
      <div className="max-w-xl">
        <h2 className={`${styles.heading1} text-black mb-10`}>WHAT WE DO</h2>
        <p
          className={`${styles.paragraph} text-gray-700 mb-5 font-medium leading-relaxed text-xl`}
        >
          Creative Edinburgh unites creative thinkers across the city. Through
          events, career support and advocacy, we bring together and help grow
          the city’s creative community, providing a space for creation,
          collaboration and connection at every stage of your career.
        </p>
        <p
          className={`${styles.paragraph} text-gray-700 font-medium leading-relaxed text-xl`}
        >
          In 2017 Creative Edinburgh became part of Creative Scotland’s
          Regularly Funded Organisations’ Portfolio and has since received
          annual grant funding to support its core service delivery.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-16 w-20 h-20 bg-yellow-400 rounded-full hidden lg:block"></div>
    </section>
  );
};

export default WhatWeDo;
