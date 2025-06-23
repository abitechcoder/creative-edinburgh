import Mission from "@/components/landingpage/Mission";
import MoreValue from "@/components/landingpage/MoreValue";
import OurValues from "@/components/landingpage/OurValues";
import VisionSection from "@/components/landingpage/VisionSection";
// import { motion } from "framer-motion";
import * as motion from "motion/react-client";
import styles from "@/style";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, // ✅ FIX HERE
    },
  },
};

const VissionMissionPage = () => {
  return (
    <div className="bg-gray-50 py-5 relative overflow-x-hidden lg:mt-[100px]">
      {/* Yellow Arc */}
      <svg
        viewBox="0 0 467.23 585.48"
        preserveAspectRatio="xMinYMin meet"
        className="hidden lg:block fill-primary absolute z-10 top-0 -right-20 lg:-top-30 lg:-right-30 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-90"
      >
        <path
          d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
          transform="translate(-853.47 -109.457)"
        ></path>
      </svg>
      <div className="lg:h-[70vh] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="block lg:flex flex-col justify-end py-10 lg:pb-20">
          <h1
            className={`${styles.heading1} font-bold text-black mt-[30%] lg:mt-0 lg:mb-10 uppercase`}
          >
            Vision, mission and values
          </h1>
        </div>
        <div className="relative">
          <svg
            viewBox="0 0 137.169 137.76"
            preserveAspectRatio="xMinYMin meet"
            className="hidden lg:block fill-green-950 z-10 absolute w-[70px] h-[70px] lg:w-[150px] lg:h-[150px] -left-[20px] lg:left-[10%] top-[20%] lg:top-[60%]"
          >
            <path
              d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
              transform="translate(-947.774 -832.697)"
            ></path>
          </svg>
        </div>
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
        {[Mission, OurValues, MoreValue].map((Component, index) => (
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
