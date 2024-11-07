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
          className="align-middle md:flex items-center justify-center flex-col z-20
   hidden cursor-pointer relative
    text-center leading-[35px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[0px] pb-[2.5px]
    transition-all duration-500"
          href={item.url}
          key={item.id}
          initial="initial"
          whileHover="hover"
        >
          <img
            src={`${TCNJ_URL}/icons/${item.name
              .toLowerCase()
              .replace(/\s+/g, "-")}-micro.svg`}
            alt={item.name}
            className="h-[25px] mx-auto relative z-20"
          />
          <span className="relative z-20">{item.name}</span>
          <motion.span
            className={`absolute hidden sm:block
      h-[35px] w-[35px]
      top-[6px]
      z-10

      pointer-events-none`} // Add pointer-events-none to prevent interference with hover
            variants={{
              initial: {
                scale: 0.5, // Start at half size
                // backgroundColor: "white",
                opacity: 0,
                borderRadius: "50%",
                borderBlockStyle: "solid",
                borderColor: "black",
                // borderWidth: "2px",
                backgroundColor: "#fded94",
              },
              hover: {
                scale: 1.35,
                backgroundColor: "#fded94",
                // backgroundColor: "#ffffff",
                opacity: 1,
                borderRadius: "50%",
                borderBlockStyle: "solid",
                borderColor: "black",
                // borderWidth: "2px",
              },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </motion.a>
      ))}
      <a
        className="
          cursor-pointer text-center leading-[35px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[10px] pb-[10px] sm:pb-[2.5px]
          hover:bg-white transition-all duration-500"
        onClick={handleAppMenuClick}
        id="all-apps"
      >
        <img
          src={`${TCNJ_URL}/icons/${
            showAppMenu && screenWidth < 550 ? `menu-x.svg` : `all-apps.svg`
          }`}
          className="h-[25px] mx-auto"
          alt="All Apps"
        />
        <span className="hidden sm:block">All Apps</span>
      </a>
      <a
        className="
          cursor-pointer text-center leading-[35px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[10px] pb-[10px] sm:pb-[2.5px]
          hover:bg-white transition-all duration-500"
        onClick={handleSiteMenuClick}
        id="menu-button"
      >
        <img
          src={`${TCNJ_URL}/icons/${
            showSiteMenu && screenWidth < 550 ? `menu-x.svg` : `menu-lines.svg`
          }`}
          className="h-[25px]  w-[25px] mx-auto"
          alt="Menu"
        />
        <span className="hidden sm:block">Menu</span>
      </a>
    </div>
  );
};

export default TopNav;
