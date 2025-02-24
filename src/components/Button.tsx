import { FC, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SupportButtonProps {
  text: string;
  onClick?: () => void;
  className?: string; // Allow custom styles
}

const Button: FC<SupportButtonProps> = ({ text, onClick, className = "" }) => {
  const [hovered, setHovered] = useState(false);
  const [reset, setReset] = useState(false);

  // Check if className contains "text-white"
  const isWhiteText = /\btext-white\b/.test(className);

  return (
    <button
      className={`flex items-center gap-2 font-medium ${className}`}
      onClick={onClick}
      onMouseEnter={() => {
        if (!reset) {
          setHovered(true);
        }
      }}
      onMouseLeave={() => {
        setHovered(false);
        setReset(true);
      }}
    >
      <span className="text-base">{text}</span>

      {/* Dynamic styles based on text color */}
      <div
        className={`relative w-8 h-8 flex items-center justify-center rounded-full overflow-hidden ${
          isWhiteText ? "bg-white" : "bg-black"
        }`}
      >
        {/* Background Transition */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ backgroundColor: isWhiteText ? "#FFF" : "#000" }}
          animate={{
            backgroundColor: hovered
              ? "#DC2626"
              : isWhiteText
              ? "#FFF"
              : "#000",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Arrow Movement */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: hovered ? 20 : reset ? 0 : 0 }}
          onAnimationComplete={() => setReset(true)}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <ArrowRight
            size={18}
            className={isWhiteText ? "text-black" : "text-white"}
          />
        </motion.div>

        {/* Arrow Returns & Stays */}
        {!reset && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <ArrowRight
              size={18}
              className={isWhiteText ? "text-black" : "text-white"}
            />
          </motion.div>
        )}
      </div>
    </button>
  );
};

export default Button;
