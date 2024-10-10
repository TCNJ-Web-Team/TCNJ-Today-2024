import React from "react";
import useStore from "./store/menusStore";

const MenuCloseButton = () => {
  const closeIcon = "https://today.tcnj.edu/custom/tcnj-today/icons/menu-x.svg";
  const { closeAppMenu, closeSiteMenu } = useStore();

  const closeButtonClick = () => {
    closeSiteMenu();
    closeAppMenu();
  };

  return (
    <img
      src={closeIcon}
      className="cursor-pointer p-[15px] border-[#000000] border-[2px] rounded-full hover:bg-tcnjyellow transition-all duration-500"
      alt="Close menu"
      onClick={closeButtonClick}
    />
  );
};

export default MenuCloseButton;
