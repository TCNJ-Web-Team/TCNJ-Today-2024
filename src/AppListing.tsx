import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "./store/menusStore";
import "./styles/app-list.scss";
import { TCNJ_URL } from "../global";

interface AppListingProps {
  appList: { id: number; name: string; url: string; topNav: boolean }[];
}

const AppListing: React.FC<AppListingProps> = ({ appList }) => {
  const { showAppMenu, toggleAppMenu } = useStore();

  // console.log(MY_GLOBAL); // 'my-global-value'
  // console.log(TCNJ_URL); // 'https://api.example.com'
  return (
    <>
      <AnimatePresence initial={false}>
        {showAppMenu && (
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
                // Adds child stagger effect
                transition: { staggerChildren: 0.0651 },
              },
            }}
            exit={{ opacity: 0, y: -10 }}
            id="app-list"
            className="absolute top-0 left-0 w-[100%] max-h-[100%] bg-[rgba(255,255,255,0.95)]
      grid grid-cols-2  
      sm:shadow-3xl 
      sm:border-[1px] sm:border-[#e0e0e0]
      pt-[47px] pb-[200px]
      gap-y-[60px]  
      sm:top-[10px] sm:grid-cols-3  
      sm:w-[calc(100%-100px)]
      sm:mx-[50px]
      md:mx-[0px]
      md:w-[655px] sm:h-[708px]
      lg:w-[630px] md:max-h-[708px]  md:left-auto md:right-0
      sm:overflow-auto"
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
                  src={`${TCNJ_URL}/final-icons/outline/${item.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}.svg`}
                  alt={item.name}
                  className="h-[55px] mx-auto mb-[15px] outline-icon"
                />
                <img
                  src={`${TCNJ_URL}/final-icons/color/${item.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}.svg`}
                  alt={item.name}
                  className="h-[55px] mx-auto mb-[15px] color-icon"
                />
                <p>{item.name}</p>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppListing;
