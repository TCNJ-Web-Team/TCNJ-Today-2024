import React, { useEffect } from "react";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Stagger delay between children
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const StaggeredList: React.FC = () => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      {items.map((item, index) => (
        <motion.div key={index} variants={staggerItem}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredList;
