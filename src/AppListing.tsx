import React from "react";
import { motion } from "framer-motion";
import useStore from "./store/menusStore";
import "./styles/app-list.scss";
interface AppListingProps {
  appList: { id: number; name: string; url: string; topNav: boolean }[];
}

const AppListing: React.FC<AppListingProps> = ({ appList }) => {
  const { showAppMenu, toggleAppMenu } = useStore();

  return (
    <motion.div
      initial="hidden"
      animate={showAppMenu ? "show" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1 },
        },
      }}
      id="app-list"
      className="absolute top-0 left-0 w-[100%] max-h-[100%] bg-[rgba(255,255,255,0.95)]
      grid grid-cols-2 shadow-3xl border-[1px] border-[#e0e0e0]
      pt-[47px] pb-[200px] gap-y-[60px] sm:top-[10px] sm:grid-cols-3 sm:w-[655px] 
      md:w-[630px] md:left-auto md:right-0"
    >
      {appList.map((item) => (
        <motion.a
          className="icon-link text-center leading-[30px] text-[14px] font-[600] font-opensans text-[#000000] 
          h-[93px]
          block"
          target="_blank"
          href={item.url}
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: -5 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={`/final-icons/outline/${item.name
              .toLowerCase()
              .replace(/\s+/g, "-")}.svg`}
            alt={item.name}
            className="h-[55px] mx-auto mb-[15px] outline-icon"
          />
          <img
            src={`/final-icons/color/${item.name
              .toLowerCase()
              .replace(/\s+/g, "-")}.svg`}
            alt={item.name}
            className="h-[55px] mx-auto mb-[15px] color-icon"
          />
          <p>{item.name}</p>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default AppListing;
