import { motion } from "framer-motion";

export default function Loading() {
  const hexagonVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 2, duration: 0.5 },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen bg-light dark:bg-dark">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-32 h-32"
        variants={hexagonVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary dark:text-primaryDark"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
      <motion.div
        className="absolute text-2xl font-bold text-primary dark:text-primaryDark"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        HR
      </motion.div>
    </div>
  );
}
