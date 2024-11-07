import React from "react";
import { TCNJ_URL } from "../global";
import { AnimatePresence, motion } from "framer-motion";

interface TopNavProps {
  topNavItems: { id: number; name: string; url: string; topNav: boolean }[];
}
import useStore from "./store/menusStore";

const TopNav: React.FC<TopNavProps> = ({ topNavItems }) => {
  const { showSiteMenu, toggleSiteMenu, closeSiteMenu } = useStore();
  const { showAppMenu, toggleAppMenu, closeAppMenu } = useStore();
  const { setNavCategory } = useStore();
  const handleAppMenuClick = () => {
    toggleAppMenu();
    closeSiteMenu();
  };

  const screenWidth = window.innerWidth;
  const handleSiteMenuClick = () => {
    toggleSiteMenu();
    // Example for large screens (e.g., desktop)

    setNavCategory("unset");
    closeAppMenu();
    if (screenWidth > 550) {
      // Example for large screens (e.g., desktop)

      setNavCategory(0);
    }
  };
  // console.log(showSiteMenu);
  return (
    <div className="flex justify-end gap-[15px] lg:gap-[36px] items-center">
      {/* {showSiteMenu && <p>Site Menu</p>}
      {showAppMenu && <p>Site App Menu</p>} */}
      {topNavItems.map((item, index) => (
        // Inside your map function, modify the motion.a and motion.span like this:
        <motion.a
          className="
    md:block hidden cursor-pointer relative
    text-center leading-[35px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[0px] pb-[2.5px]
    transition-all duration-500"
          href={item.url}
          key={item.id}
          initial="initial"
          whileHover="hover" // This tells framer-motion to use the hover variant when the element is hovered
        >
          <img
            src={`${TCNJ_URL}/icons/${item.name
              .toLowerCase()
              .replace(/\s+/g, "-")}-micro.svg`}
            alt={item.name}
            className="h-[25px] mx-auto"
          />
          {item.name}
          <motion.span
            className={`absolute bottom-[4px] left-0 h-[1px] 
    hidden sm:block`}
            variants={{
              // Define the animation variants
              initial: {
                width: 0,
                backgroundColor: "#000",
                opacity: 0,
              },
              hover: {
                width: "100%",
                backgroundColor: "#000",
                opacity: 1,
              },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </motion.a>
      ))}
      <motion.a
        className="relative
          cursor-pointer text-center leading-[35px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[0px] pb-[10px] sm:pb-[2.5px]
          transition-all duration-500"
        onClick={handleAppMenuClick}
        id="all-apps"
        initial="initial"
        whileHover="hover"
      >
        <img
          src={`${TCNJ_URL}/icons/${
            showAppMenu && screenWidth < 550 ? `menu-x.svg` : `all-apps.svg`
          }`}
          className="h-[25px] mx-auto"
          alt="All Apps"
        />
        <span className="hidden sm:block">All Apps</span>
        <motion.span
          className={`absolute bottom-[4px] left-0 h-[1px] 
    hidden sm:block`}
          variants={{
            // Define the animation variants
            initial: {
              width: 0,
              backgroundColor: "#000",
              opacity: 0,
            },
            hover: {
              width: "100%",
              backgroundColor: "#000",
              opacity: 1,
            },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
      </motion.a>
      <motion.a
        className="relative
          cursor-pointer text-center leading-[35px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[0px] pb-[10px] sm:pb-[2.5px]
          transition-all duration-500"
        onClick={handleSiteMenuClick}
        id="menu-button"
        initial="initial"
        whileHover="hover"
      >
        <img
          src={`${TCNJ_URL}/icons/${
            showSiteMenu && screenWidth < 550 ? `menu-x.svg` : `menu-lines.svg`
          }`}
          className="h-[25px]  w-[25px] mx-auto"
          alt="Menu"
        />
        <span className="hidden sm:block">Menu</span>
        <motion.span
          className={`absolute bottom-[4px] left-0 h-[1px] 
    hidden sm:block`}
          variants={{
            // Define the animation variants
            initial: {
              width: 0,
              backgroundColor: "#000",
              opacity: 0,
            },
            hover: {
              width: "100%",
              backgroundColor: "#000",
              opacity: 1,
            },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
      </motion.a>
    </div>
  );
};

export default TopNav;
