import React from "react";
import useStore from "./store/menusStore";
import { AnimatePresence, motion } from "framer-motion";

export default function TakeoverNav() {
  const { showSiteMenu, toggleSiteMenu } = useStore();

  return (
    <>
      <AnimatePresence initial={false}>
        {showSiteMenu && (
          <motion.div
            initial="hidden"
            animate={showSiteMenu ? "show" : "hidden"}
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                y: 0,
                // Adds child stagger effect
                transition: { staggerChildren: 0.0651 },
              },
            }}
            exit={{ opacity: 0 }}
            id="nav-takeover-list"
            className="w-[100%] h-[100%] bg-white bg-opacity-95 absolute top-0 left-0 z-10"
          >
            MENU GOES HERE
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
