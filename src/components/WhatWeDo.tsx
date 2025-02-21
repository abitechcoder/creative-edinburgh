import styles from "../style";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-50 py-16 relative px-6 lg:h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-full flex flex-col justify-center">
        <h2 className={`${styles.heading1} text-black mb-6 lg:mb-10 mt-16`}>WHAT WE DO</h2>
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
      <div className="relative">
        <div className="absolute top-[50%] left-20 w-[120px] h-[120px] bg-yellow-400 rounded-full hidden lg:block"></div>
      </div>
    </section>
  );
};

export default WhatWeDo;
