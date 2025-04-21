import { motion } from "framer-motion";

const ExecutiveTeam = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-black py-16 px-8 flex justify-end items-end md:px-16"
    >
      <div className="md:w-[50%] w-full my-0 lg:my-20 flex flex-col gap-4 lg:gap-8">
        <h2 className="text-2xl lg:text-5xl font-bold">EXECUTIVE TEAM</h2>
        <p className="text-xl leading-relaxed">
          Our Team are based in Freetown Sierra Leone, but we pop up in various
          locations around town. The team come from a range of creative
          backgrounds and have expertise in a variety of areas, from visual art
          to publishing. Come along to one of our regular events to{" "}
          <a
            href="mailto:connect@sierraleonebusinessmarkit.com"
            className="text-tertiary"
          >
            say hello or get in touch
          </a>
          .
        </p>
      </div>
    </motion.section>
  );
};

export default ExecutiveTeam;
