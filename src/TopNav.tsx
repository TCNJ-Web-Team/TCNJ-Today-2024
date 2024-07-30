import React from "react";

interface TopNavProps {
  topNavItems: { id: number; name: string; url: string; topNav: boolean }[];
}
import useStore from "./store/menusStore";

const TopNav: React.FC<TopNavProps> = ({ topNavItems }) => {
  const { showSiteMenu, toggleSiteMenu } = useStore();
  const { showAppMenu, toggleAppMenu } = useStore();

  return (
    <div className="flex flex-wrap justify-end gap-[25px] lg:gap-[60px]">
      {/* {showSiteMenu && <p>Site Menu</p>}
      {showAppMenu && <p>Site App Menu</p>} */}
      {topNavItems.map((item, index) => (
        <a
          className="text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] "
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
          cursor-pointer text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] "
        target="_blank"
        onClick={toggleAppMenu}
      >
        <img
          src="/icons/all-apps.svg"
          className="h-[25px] mx-auto"
          alt="All Apps"
        />
        All Apps
      </a>
      <a
        className="
          cursor-pointer text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] "
        target="_blank"
        onClick={toggleSiteMenu}
      >
        <img
          src="/icons/menu-lines.svg"
          className="h-[25px]  w-[25px] mx-auto"
          alt="Menu"
        />
        Menu
      </a>
    </div>
  );
};

export default TopNav;
