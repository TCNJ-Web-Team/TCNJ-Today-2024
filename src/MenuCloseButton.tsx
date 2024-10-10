import React from "react";
import PropTypes from "prop-types";
import useStore from "./store/menusStore";

const MenuCloseButton = (props) => {
  const closeIcon = "https://today.tcnj.edu/custom/tcnj-today/icons/menu-x.svg";
  const { closeAppMenu, closeSiteMenu } = useStore();

  const closeButtonClick = () => {
    closeSiteMenu();
    closeAppMenu();
  };

  return (
    <div className="mx-[35px] sx:ms-mx-[48px] md:mx-auto md:max-w-[1130px] betweenLgMd:mx-[35px] mdLgPadding w-[100%]">
      <img
        src={closeIcon}
        className="cursor-pointer p-[20px] border-[#000000] sticky top-[10px] right-[10px]" // Remove absolute from parent
        alt="Close menu"
        onClick={closeButtonClick}
      />
    </div>
  );
};

MenuCloseButton.propTypes = {};

export default MenuCloseButton;
