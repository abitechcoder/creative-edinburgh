import { motion } from "framer-motion";

const WorkWithUs = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-green-800 text-white py-16 flex justify-start items-start px-8 md:px-16 relative overflow-hidden"
    >
      <div className="md:w-[50%] w-full flex flex-col gap-4">
        <h2 className="text-2xl lg:text-5xl font-bold">WORK WITH US</h2>
        <p className="text-xl leading-relaxed">
          We may be a small team, but we are part of a huge community and always keen to explore ways we can work together. 
          From commissioned artwork and design projects to volunteering at our events, there are various ways you can get involved with Creative Hub Africa in order to support and connect with the wider creative community. 
          If you have a concept or skill set that you’re keen to share with us, we’d like to hear from you!
        </p>
      </div>
    </motion.section>
  );
};

export default WorkWithUs;
