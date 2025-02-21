import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PastMember = () => {
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
            <p className="flex flex-col gap-2">Miriam Nelken
              <span className="font-normal mb-2">Co-Chair of the Board</span>
            </p>
            <p>Marian Blythe</p>
            <p>David Weir</p>
            <p>Jeff Meeks
            </p>
            <p>Michael Johnston</p>
            <p>Mike McGrail</p>
            <p>Mark Gorman</p>
            <p>Anna Gormenzano-Marks</p>
            <p>Yasmin Suliman</p>
            <p>Jim Hollington</p>
            <p>Sara Thomson</p>
            <p>Ginnie Atkinson</p>
            <p>Ros Davis</p>
            <p>Mike Davidson</p>
            <p>Danae Shell</p>
            <p>Sarah Cuthbert-Kerr</p>
            <p>Briana Pegado</p>
            <p>Pilar García de Leániz</p>            
            <p>Ana Betancourt</p>            
            <p>June Edgar</p>            
            <p>Janine Matheson</p>
            <p>Carrie Maginn</p>
            <p>Kate Ho</p>
            <p>Claire Stewart</p>
            <p>Lynsey Smith</p>
          </motion.div>
        )}
        <div className="cursor-pointer border-b border-[#b8b7b7] py-2"></div>
      </AnimatePresence>
    </div>
  );
};

export default PastMember;
