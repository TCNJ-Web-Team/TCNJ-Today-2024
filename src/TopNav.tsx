import React from "react";

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
    <div className="flex justify-end gap-[25px] lg:gap-[60px]">
      {/* {showSiteMenu && <p>Site Menu</p>}
      {showAppMenu && <p>Site App Menu</p>} */}
      {topNavItems.map((item, index) => (
        <a
          className="
          sm:block hidden cursor-pointer
          text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] "
          target="_blank"
          href={item.url}
          key={item.id}
        >
          <img
            src={`/icons/${item.name
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
          cursor-pointer text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000]"
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
          cursor-pointer text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000]"
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
