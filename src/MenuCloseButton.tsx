import React from "react";
import useStore from "./store/menusStore";
interface MenuCloseButtonProps {
  itemWidth?: string | number; // Width can be a string (e.g., "50px") or a number (e.g., 50)
  rightAlign?: boolean; // Absolute is optional
  borderCheck?: boolean; // Absolute is optional
}
const MenuCloseButton: React.FC<MenuCloseButtonProps> = ({
  itemWidth,
  // rightAlign,
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
      className={`cursor-pointer border-[#e0e0e0] hover:bg-gray-200 transition-all duration-500 ${
        !borderCheck ? "absolute top-[0px] right-[-20px] w-[50px]" : ""
      }
      ${itemWidth ? `p-[${itemWidth}]` : "p-[15px]"} 
      ${
        borderCheck
          ? `border-[0px]`
          : "mt-[-47px] hidden sm:block sm:mr-[-.5%] md:mr-[-20px] border-[1px] sm:border-[#e0e0e0] rounded-none border-t-0 border-r-0"
      }
      `}
      alt="Close menu"
      onClick={closeButtonClick}
    />
  );
};

export default MenuCloseButton;
