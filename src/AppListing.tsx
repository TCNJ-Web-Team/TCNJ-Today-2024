// export default function AppListing({ appList }) {
//   console.log(appList);
//   return <div id="app-list"></div>;
// }
import React from "react";
import { motion } from "framer-motion";

interface AppListingProps {
  appList: { id: number; name: string; url: string; topNav: boolean }[];
}
import useStore from "./store/menusStore";

const AppListing: React.FC<AppListingProps> = ({ appList }) => {
  const { showSiteMenu, toggleSiteMenu } = useStore();
  const { showAppMenu, toggleAppMenu } = useStore();
  // console.log(appList);
  return (
    <motion.div
      initial="hidden"
      animate={showAppMenu ? "show" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
          // Add transition to only play once
          // transition: {
          //   staggerChildren: 0.1,
          //   staggerDirection: -1,
          //   // Use either when or delay here.
          //   // when: "afterChildren",
          // },
        },
        show: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1 },
        },
      }}
      id="app-list"
      className="absolute top-0 left-0 w-[100%] max-h-[100%] bg-[rgba(255,255,255,0.95)]
      grid grid-cols-2  shadow-3xl border-[1px] border-[#e0e0e0]
      pt-[47px] pb-[200px]
      gap-y-[60px]  
      sm:top-[10px] sm:grid-cols-3  sm:w-[655px] sm:h-[708px]
      md:w-[630px] md:max-h-[708px]  md:left-auto md:right-0"
    >
      {/* {showSiteMenu && <p>Site Menu</p>}
      {showAppMenu && <p>Site App Menu</p>} */}
      {appList.map((item, index) => (
        <motion.a
          className="text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] "
          target="_blank"
          href={item.url}
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: -5 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={`/icons/bw/${item.name
              .toLowerCase()
              .replace(/\s+/g, "-")}.svg`}
            alt={item.name}
            className="h-[55px] mx-auto mb-[15px]"
          />

          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};
export default AppListing;
