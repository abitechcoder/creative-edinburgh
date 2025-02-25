import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SteeringGroup = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-4 px-10 my-8">
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
            className="overflow-hidden mt-4 font-medium grid md:grid-cols-3 gap-4"
          >
            <p>Laura Hofmans
            </p>
            <p>David Mahoney</p>
            <p>Andy Murray</p>
            <p>Ian Greenhill
            </p>
            <p>Craig Fairweather</p>
            <p>Katy Koren</p>
            <p>Fin Ross Russell</p>
            <p>Isla Munro</p>
            <p>Finlay Van Der Vossen</p>
            <p>
            Rohan Gunatillake</p>
            <p>Peggy Hughes</p>
            <p>
            Chris Behr</p>
            <p>
            Susanna Murphy</p>
            <p>
            Catriona Cox</p>
            <p>Chris Muir</p>
            <p>
            Tamsin Ansdell</p>
            <p>
            Rachel Mays</p>
            <p>Rupert Thompson</p>            
            <p>Meghan Bidwell</p>            
            <p>
            Andrew Dyce</p>            
            <p>
            Cristina Spiteri</p>
            <p>Denis Mallon</p>
            <p>Solii Brodie</p>
            <p>Claire Stewart</p>
          </motion.div>
        )}
        <div className="cursor-pointer border-b border-[#b8b7b7] py-2"></div>
      </AnimatePresence>
    </div>
  );
};

export default SteeringGroup;
