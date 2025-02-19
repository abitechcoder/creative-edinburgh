import { motion } from "framer-motion";
import { Mission, MoreValue, OurValue, VisionSection } from "../components";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const VissionMissionPage = () => {
  return (
    <div className="bg-gray-50 py-5">
      <div className="my-10 lg:my-20 px-6 grid grid-cols-1 lg:grid-cols-2">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-black mb-10 uppercase max-w-lg">
          Vision, mission and values
        </h1>
      </div>
      <div>
        {/* First section (Appears immediately) */}
        <motion.div
          initial="visible"
          animate="visible"
          variants={sectionVariants}
          className="mb-10"
        >
          <VisionSection />
        </motion.div>

        {/* Other sections (Appear on scroll) */}
        {[Mission, OurValue, MoreValue].map((Component, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
            className="mb-10"
          >
            <Component />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VissionMissionPage;
