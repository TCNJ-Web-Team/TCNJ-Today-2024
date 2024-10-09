import React from "react";
import { TCNJ_URL } from "../global";

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

  const handleSiteMenuClick = () => {
    const screenWidth = window.innerWidth;

    toggleSiteMenu();
    // Example for large screens (e.g., desktop)

    setNavCategory("unset");
    closeAppMenu();
    if (screenWidth > 550) {
      // Example for large screens (e.g., desktop)

      setNavCategory(0);
    }
  };
  return (
    <div className="flex justify-end gap-[5px] lg:gap-[26px] items-center">
      {/* {showSiteMenu && <p>Site Menu</p>}
      {showAppMenu && <p>Site App Menu</p>} */}
      {topNavItems.map((item, index) => (
        <a
          className="
          md:block hidden cursor-pointer
          text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[10px] pb-[2.5px]
           hover:bg-white transition-all duration-500"
          target="_blank"
          href={item.url}
          key={item.id}
        >
          <img
            src={`${TCNJ_URL}/icons/${item.name
              .toLowerCase()
              .replace(/\s+/g, "-")}-micro.svg`}
            alt={item.name}
            className="h-[25px] mx-auto"
          />

          {item.name}
        </a>
      ))}
      <a
        className="
          cursor-pointer text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[10px] pb-[10px] sm:pb-[2.5px]
          hover:bg-white transition-all duration-500"
        target="_blank"
        onClick={handleAppMenuClick}
        id="all-apps"
      >
        <img
          src="/icons/all-apps.svg"
          className="h-[25px] mx-auto"
          alt="All Apps"
        />
        <span className="hidden sm:block">All Apps</span>
      </a>
      <a
        className="
          cursor-pointer text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] pt-[10px] px-[10px] pb-[10px] sm:pb-[2.5px]
          hover:bg-white transition-all duration-500"
        target="_blank"
        onClick={handleSiteMenuClick}
        id="menu-button"
      >
        <img
          src="/icons/menu-lines.svg"
          className="h-[25px]  w-[25px] mx-auto"
          alt="Menu"
        />
        <span className="hidden sm:block">Menu</span>
      </a>
    </div>
  );
};

export default TopNav;
