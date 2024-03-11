import React from "react";

interface TopNavProps {
  topNavItems: { id: number; name: string; url: string; topNav: boolean }[];
}

const TopNav: React.FC<TopNavProps> = ({ topNavItems }) => {
  return (
    <div className="flex flex-wrap justify-end gap-[25px] lg:gap-[60px]">
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
        className="text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] "
        target="_blank"
        href="#"
      >
        <img
          src="/icons/all-apps.svg"
          className="h-[25px] mx-auto"
          alt="All Apps"
        />
        All Apps
      </a>
      <a
        className="text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] "
        target="_blank"
        href="#"
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
