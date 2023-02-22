import { motion } from "framer-motion";
import { useRouter } from "next/router";

export function PageTransition({ children }) {
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      transition="transition"
      variants={animation.slide}
    >
      {children}
    </motion.div>
  );
}

const animation = {
  slide: {
    hidden: { opacity: 0, x: -300 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 1,
    },
  },
};
