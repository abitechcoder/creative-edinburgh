import { motion } from "framer-motion";

const ExecutiveTeam = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-black py-16 px-8 flex justify-end items-end md:px-16"
    >
      <div className="md:w-[42%] w-full my-40">
        <h2 className="text-4xl font-bold mb-4">EXECUTIVE TEAM</h2>
        <p className="text-lg leading-relaxed">
          Our Team are based on the Creative Floor in CodeBase in the West End of Edinburgh, but we pop up in various locations around town.
          The team come from a range of creative backgrounds and have expertise in a variety of areas, from visual art to publishing.
          Come along to one of our regular events to say hello, or get in touch at <br />
          <a href="mailto:info@creative-edinburgh.com" className="font-medium text-black underline ">
            {" "}info@creative-edinburgh.com.
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default ExecutiveTeam;
