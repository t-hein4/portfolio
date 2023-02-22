import { motion } from "framer-motion";
import { useRouter } from "next/router";

export function PageTransition({ children }) {
  const router = useRouter();

  return (
    <motion.div
      initial="initial"
      animate="animate"
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
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 },
    transition: {
      type: "tween",
      stiffness: 260,
      damping: 20,
    },
  },
};
