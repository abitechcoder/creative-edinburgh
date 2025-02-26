import styles from "../style";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-50 py-16 relative px-6 lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-full flex flex-col justify-center">
        <h2 className={`${styles.heading1} text-black mb-6 lg:mb-10 mt-16`}>WHAT WE DO</h2>
        <p
          className={`${styles.paragraph} text-gray-700 mb-5 font-medium leading-relaxed text-xl`}
        >
          Creative Hub Africa unites creative thinkers across the city through
          events, career support and advocacy, we bring together and help grow
          the city’s creative community, providing a space for creation,
          collaboration and connection at every stage of your career.
        </p>
      </div>
      <div className="relative">
        <div className="absolute top-[50%] left-20 w-[120px] h-[120px] bg-yellow-400 rounded-full hidden lg:block"></div>
      </div>
    </section>
  );
};

export default WhatWeDo;
