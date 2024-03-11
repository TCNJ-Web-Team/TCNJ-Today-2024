import React from "react";

interface TopNavProps {
  topNavItems: { id: number; name: string; url: string; topNav: boolean }[];
}

const TopNav: React.FC<TopNavProps> = ({ topNavItems }) => {
  return (
    <div className="flex flex-wrap justify-end gap-[25px] md:gap-[25px]">
      {topNavItems.map((item, index) => (
        <a
          className="text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] md:w-[92px]"
          target="_blank"
          href={item.url}
          key={item.id}
        >
          {item.name}
        </a>
      ))}
      <a
        className="text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000]"
        target="_blank"
        href="#"
      >
        Menu
      </a>
    </div>
  );
};

export default TopNav;
