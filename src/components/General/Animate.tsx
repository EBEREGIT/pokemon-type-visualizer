import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export default function Animate(props: { content: ReactNode }) {
  const { content } = props;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
}
