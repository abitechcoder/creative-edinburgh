import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router";

const WorkWithUs = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-green-800 text-white py-16 flex justify-start items-start px-8 md:px-16 relative overflow-hidden"
    >
      <div className="md:w-[45%] w-full">
        <h2 className="text-5xl font-bold mb-4">WORK WITH US</h2>
        <p className="text-lg leading-relaxed">
          We may be a small team, but we are part of a huge community and always keen to explore ways we can work together. 
          From commissioned artwork and design projects to volunteering at our events, there are various ways you can get involved with Creative Edinburgh in order to support and connect with the wider creative community. 
          If you have a concept or skill set that you’re keen to share with us, we’d like to hear from you!
        </p>
      </div>

      {/* Button */}
        <NavLink to={`#`} className={`absolute flex flex-row items-center gap-4 bottom-10 right-10`}>
            <p>
          Simply get in touch with us

            </p>
        <div className="flex items-center gap-2 bg-white text-black font-semibold px-2 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
          <AiOutlineArrowRight size={23}/>
        </div>

        </NavLink>

      {/* Background Elements */}
      {/* <div className="absolute top-0 right-0 w-1/3">
        <div className="bg-yellow-400 w-72 h-72 rounded-full -translate-x-20 -translate-y-16"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3">
        <div className="bg-blue-800 w-80 h-80 rounded-full translate-x-10 translate-y-10"></div>
      </div> */}
    </motion.section>
  );
};

export default WorkWithUs;
