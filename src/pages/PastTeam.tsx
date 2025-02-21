import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PastTeam = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-4 px-10 my-14">
      {/* Toggle Button */}
      <div 
        className="flex justify-between items-center cursor-pointer border-t border-[#b8b7b7] py-3"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h2 className="text-lg py-4 font-semibold">Past core-team members</h2>
        <span className="text-xl">{isVisible ? "−" : "+"}</span>
      </div>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-4 grid md:grid-cols-3 gap-4"
          >
            <p>Amanda Liddle</p>
            <p>Caitlin Van Buren</p>
            <p>Anna Gormenzano-Marks</p>
            <p>Eilidh Haig</p>
            <p>Becca Inglis</p>
            <p>Siân Landau</p>
            <p>Kate Livingstone</p>
            <p>Janine Matheson</p>
            <p>Rachel O'Regan</p>
            <p>Robyn Owen</p>
            <p>Briana Pegado</p>
            <p>Raheema Sayed</p>
            <p>Lynsey Smith</p>
            <p>Claire Stewart</p>
            <p>Yasmin Suliman</p>
            <p>Katherine Warren</p>
          </motion.div>
        )}
         <div className="cursor-pointer border-b border-[#b8b7b7] py-1"></div>
      </AnimatePresence>
    </div>
  );
};

export default PastTeam;
