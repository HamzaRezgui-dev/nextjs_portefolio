import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 relative">
      {/* MotionLink wrapping the hexagon */}
      <MotionLink
        href="/"
        className="relative flex items-center justify-center text-2xl font-bold text-dark dark:text-light"
        initial={{ color: "currentColor", stroke: "currentColor" }}
        whileHover={{
          stroke: [
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
          ],
          color: [
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
          ],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        {/* Hexagon SVG */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
        </motion.svg>
        {/* HR Text */}
        <motion.span className="absolute">HR</motion.span>
      </MotionLink>
    </div>
  );
};

export default Logo;
