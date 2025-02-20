import { FC, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SupportButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: FC<SupportButtonProps> = ({ text, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [reset, setReset] = useState(false); // Control final position

  return (
    <button
      className="flex items-center gap-2 text-black font-medium"
      onClick={onClick}
      onMouseEnter={() => {
        if (!reset) {
          setHovered(true);
        }
      }}
      onMouseLeave={() => {
        setHovered(false);
        setReset(true); // Lock position after first transition
      }}
    >
      <span className="text-base">{text}</span>
      <div className="relative w-8 h-8 flex items-center justify-center rounded-full overflow-hidden">
        {/* Background Transition */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ backgroundColor: "#000" }}
          animate={{ backgroundColor: hovered ? "#DC2626" : "#000" }}
          transition={{ duration: 0.3 }}
        />

        {/* Arrow Movement */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: hovered ? 20 : reset ? 0 : 0 }}
          onAnimationComplete={() => setReset(true)} // Ensure arrow stays after returning
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <ArrowRight size={18} className="text-white" />
        </motion.div>

        {/* Arrow Returns & Stays */}
        {!reset && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }} // Small delay for smooth effect
          >
            <ArrowRight size={18} className="text-white" />
          </motion.div>
        )}
      </div>
    </button>
  );
};

export default Button;
