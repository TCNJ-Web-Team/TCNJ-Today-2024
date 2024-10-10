import React from "react";
import useStore from "./store/menusStore";
interface MenuCloseButtonProps {
  itemWidth?: string | number; // Width can be a string (e.g., "50px") or a number (e.g., 50)
  rightAlign?: boolean; // Absolute is optional
  borderCheck?: boolean; // Absolute is optional
}
const MenuCloseButton: React.FC<MenuCloseButtonProps> = ({
  itemWidth,
  rightAlign,
  borderCheck,
}) => {
  const closeIcon = "https://today.tcnj.edu/custom/tcnj-today/icons/menu-x.svg";
  const { closeAppMenu, closeSiteMenu } = useStore();

  const closeButtonClick = () => {
    closeSiteMenu();
    closeAppMenu();
  };

  return (
    <img
      src={closeIcon}
      className={`cursor-pointer border-[#000000]  rounded-full bg-white hover:bg-gray-200 transition-all duration-500 ${
        rightAlign ? "absolute top-[0px] right-[-20px]" : ""
      }
      ${itemWidth ? `p-[${itemWidth}]` : "p-[15px]"} 
      ${borderCheck ? `border-[2px]` : "mt-[-30px]"}
      `}
      alt="Close menu"
      onClick={closeButtonClick}
    />
  );
};

export default MenuCloseButton;
