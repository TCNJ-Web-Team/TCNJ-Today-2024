import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "./store/menusStore";
import "./styles/app-list.scss";
import { TCNJ_URL } from "../global";
import MenuCloseButton from "./MenuCloseButton";

interface AppListingProps {
  appList: {
    id: number;
    name: string;
    url: string;
    topNav: boolean;
    popular: boolean;
    portal: boolean;
  }[];
}

const AppListing: React.FC<AppListingProps> = ({ appList }) => {
  const { showAppMenu, toggleAppMenu } = useStore();
  const handleLinkClick = (url: string) => {
    window.location.href = url;
  };
  // console.log(MY_GLOBAL); // 'my-global-value'
  // console.log(TCNJ_URL); // 'https://api.example.com'
  // const popularOrder = appList.filter((app) => {
  //   return app.popular;
  // });

  const popularOrder = appList
    .sort((a, b) => {
      // Put Google Apps first
      if (a.name === "Google Apps") return -1;
      if (b.name === "Google Apps") return 1;
      return 0;
    })
    .filter((app) => {
      return app.popular;
    });
  const portalList = appList.filter((app) => {
    return app.portal;
  });
  const alphaOrder = appList.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return (
    <>
      <AnimatePresence initial={false}>
        {showAppMenu && (
          <>
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
                  transition: {
                    staggerChildren: window.matchMedia("(min-width: 640px)")
                      .matches
                      ? 0.0651
                      : 0,
                  },
                },
              }}
              exit={{ opacity: 0, y: -10 }}
              id="app-list"
              className="absolute top-0 left-0 w-[100%] max-h-[100%] bg-[rgba(255,255,255,0.98)]
      z-10
      sm:shadow-3xl 
      sm:border-[1px] sm:border-[#e0e0e0]
      pt-[50px] pb-[60px]
      sm:pt-[70px]
      sm:top-[10px] 
      sm:w-[calc(100%-58px)]
      sm:left-0
      sm:right-0
      sm:mx-auto
      sm:px-[60px]
      betweenSmMd:px-[3%]
      betweenSmMd:pt-[40px]
      md:pt-[60px]
      md:px-[60px]
      md:mx-[0px]
      md:w-[575px] 
      md:max-h-[70vh]  md:left-auto md:right-0
      betweenLgMdXSmall:right-[30px]
      h-[100%] sm:h-[70vh]
      betweenLgMdSmall:right-[38px]
      lg:w-[575px] 
      sm:overflow-y-auto
      sm:overflow-x-hidden
      "
            >
              <div className="sticky  z-50 top-[0px]  right-[0px] w-[100%] ">
                <MenuCloseButton itemWidth={"15px"} rightAlign />
              </div>
              <div
                className="grid grid-cols-2 gap-y-[45px]  sm:gap-y-[45px] sm:grid-cols-[repeat(3,minmax(0,1fr))] 
              lg:grid-cols-[repeat(3,minmax(0,125px))] 
              lg:gap-x-[35px] px-[25px] sm:px-0"
              >
                <motion.h2
                  className="col-span-2 sm:col-span-3 font-interstate text-[18px] font-[900] leading-[25px] ml-[0px] mb-[-15px] sm:mb-[-12.5px] text-[#000000] uppercase"
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  Most Popular
                </motion.h2>
                {popularOrder.map((item) => (
                  <motion.a
                    className="icon-link text-center leading-[30px] text-[14px] font-[600] font-opensans text-[#000000] 
          h-[93px]
          block lg:max-w-[125px]"
                    // onClick={() => handleLinkClick(item.url)}
                    href={item.url}
                    id={item.name}
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
                      className={`mx-auto mb-[15px] outline-icon ${
                        item.name === "Oracle Cloud"
                          ? "pt-[10px] h-[55px]"
                          : "h-[55px]"
                      }`}
                    />
                    <img
                      src={`${TCNJ_URL}/final-icons/color/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}.svg`}
                      alt={item.name}
                      className={`mx-auto mb-[15px] color-icon ${
                        item.name === "Oracle Cloud"
                          ? "pt-[10px] h-[55px]"
                          : "h-[55px]"
                      }`}
                    />
                    <p>{item.name}</p>
                  </motion.a>
                ))}
                <motion.hr
                  className="col-span-2 sm:col-span-3 my-[5px] border-[#707070] ml-[0px] mr-[25px] w-[100%]"
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    show: { opacity: 1, y: 0 },
                  }}
                />
                <motion.h2
                  className="col-span-2 sm:col-span-3 font-interstate text-[18px] font-[900] leading-[25px] ml-[0px] mb-[-15px] sm:mb-[-12.5px] text-[#000000] uppercase"
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  Portals
                </motion.h2>
                {portalList.map((item) => (
                  <motion.a
                    className="icon-link text-center leading-[30px] text-[14px] font-[600] font-opensans text-[#000000] 
          h-[93px]
          block lg:max-w-[125px]"
                    // onClick={() => handleLinkClick(item.url)}
                    href={item.url}
                    id={item.name}
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
                      className={`mx-auto mb-[15px] outline-icon ${
                        item.name === "Oracle Cloud"
                          ? "pt-[10px] h-[55px]"
                          : "h-[55px]"
                      }`}
                    />
                    <img
                      src={`${TCNJ_URL}/final-icons/color/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}.svg`}
                      alt={item.name}
                      className={`mx-auto mb-[15px] color-icon ${
                        item.name === "Oracle Cloud"
                          ? "pt-[10px] h-[55px]"
                          : "h-[55px]"
                      }`}
                    />
                    <p>{item.name}</p>
                  </motion.a>
                ))}
                <motion.hr
                  className="col-span-2 sm:col-span-3 my-[5px] border-[#707070] ml-[0px] mr-[25px] w-[100%]"
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    show: { opacity: 1, y: 0 },
                  }}
                />
                <motion.h2
                  className="col-span-2 sm:col-span-3 font-interstate text-[18px] font-[900] leading-[25px] ml-[0px] mb-[-15px] sm:mb-[-12.5px] text-[#000000] uppercase"
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  A-Z
                </motion.h2>
                {alphaOrder.map((item) => (
                  <motion.a
                    className="icon-link text-center leading-[30px] text-[14px] font-[600] font-opensans text-[#000000] 
          h-[93px]
          block lg:max-w-[125px]"
                    // onClick={() => handleLinkClick(item.url)}
                    href={item.url}
                    id={item.name}
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
                      className={`mx-auto mb-[15px] outline-icon ${
                        item.name === "Oracle Cloud"
                          ? "pt-[10px] h-[55px]"
                          : item.name === "Get It Card"
                          ? "pt-[20px] h-[55px]"
                          : "h-[55px]"
                      }`}
                    />
                    <img
                      src={`${TCNJ_URL}/final-icons/color/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}.svg`}
                      alt={item.name}
                      className={`mx-auto mb-[15px] color-icon ${
                        item.name === "Oracle Cloud"
                          ? "pt-[10px] h-[55px]"
                          : item.name === "Get It Card"
                          ? "pt-[20px] h-[55px]"
                          : "h-[55px]"
                      }`}
                    />
                    <p
                      className={
                        item.name === "Student Feedback" ? "!w-[180px]" : ""
                      }
                    >
                      {item.name}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppListing;
