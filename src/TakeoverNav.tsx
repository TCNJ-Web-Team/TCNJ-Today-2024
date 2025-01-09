import React, { useState } from "react";
import useStore from "./store/menusStore";
import { AnimatePresence, motion } from "framer-motion";
import navList from "./assets/nav-takeover-list.json";
import "./styles/submenu-animation.scss";
import MenuCloseButton from "./MenuCloseButton";
// Define the type for individual items
interface Item {
  title: string;
  url: string | null; // URL can be null
  header?: boolean; // header is optional
}

// Define the type for categories with items
interface CategoryWithItems {
  name: string;
  link: string | null; // link can be null
  items: Item[];
}

// Define the type for categories without items
interface CategoryWithoutItems {
  name: string;
  link: string; // link is required
}

// Define a union type for all possible categories
type Category = CategoryWithItems | CategoryWithoutItems;

// Define the type for the overall structure
type Data = Category[];

// Type guard to check if category has items
function hasItems(category: Category): category is CategoryWithItems {
  return "items" in category;
}

export default function TakeoverNav() {
  const {
    showSiteMenu,
    toggleSiteMenu,
    navCategory,
    setNavCategory,
    setNavCategoryDesktop,
  } = useStore();
  const [currentCategory, setCurrentCategory] = useState<number | null>(null);

  return (
    <>
      <AnimatePresence initial={false}>
        {showSiteMenu && (
          <motion.div
            initial="hidden"
            animate={showSiteMenu ? "show" : "hidden"}
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            exit={{ opacity: 0 }}
            id="nav-takeover-list"
            className="w-[100%] h-[100%] bg-white bg-opacity-95 absolute top-0 left-0 z-10"
          >
            <div
              id="inner-takeover-nav"
              className="mx-[35px] sx:ms-mx-[48px] md:mx-auto py-[50px] sm:py-[75px] md:py-[175px] md:max-w-[1130px] betweenLgMd:mx-[35px] mdLgPadding relative"
            >
              <div className="absolute right-0 z-50 hidden sm:block sm:top-[35px] md:top-[125px]">
                <MenuCloseButton borderCheck />
              </div>
              {navList.map((category, index) => {
                const isFirst = index === 0;
                const isLast = 4;

                if (hasItems(category)) {
                  // Category with items
                  return (
                    <div
                      key={category.name}
                      className={`sm:flex flex-row  
                        w-full border-t-[1px] border-[#CCCCCC] 
                        sm:border-t-0 sm:h-auto pb-[20px] sm:pb-0
                        ${isFirst ? "border-t-0" : ""}
                        ${
                          index === isLast
                            ? "border-b-[1px] border-[#CCCCCC] sm:border-b-0 mb-[35px] sm:mb-0"
                            : ""
                        }`}
                    >
                      <div
                        className={`dropdown-container pt-[25px] pb-[25px]
                          ${index === 0 ? "!pt-0 first-one" : ""}
                          ${navCategory === index ? "active-arrow" : ""}
                          mb-[-20px] sm:mb-0 sm:py-0`}
                        onClick={() => {
                          const screenWidth = window.innerWidth;
                          if (screenWidth <= 550) {
                            setCurrentCategory(index); // Set the current category when clicked
                            setNavCategory(index);
                          } else {
                            setNavCategoryDesktop(index);
                          }
                        }}
                      >
                        <motion.h2
                          className={`relative text-left cursor-pointer block font-alfaslab font-normal 
    text-[30px] leading-[40px]
    sm:text-[40px] sm:leading-[54px] sm:mb-[25px] 
    betweenSmMd:text-[30px] betweenSmMd:leading-[40px] betweenSmMd:mb-[25px] 
    md:text-[50px] md:leading-[50px] md:mb-[50px] w-fit
    ${navCategory === index ? "sm:text-tcnjblue" : ""}`}
                          onMouseEnter={() => setCurrentCategory(index)} // Set the hover state
                          onMouseLeave={() => setCurrentCategory(null)} // Reset hover state
                          whileTap={{
                            scale: 0.98,
                            transformOrigin: "center center", // or "center center", "right center" etc.
                          }}
                        >
                          {category.name}

                          <motion.span
                            className={`absolute bottom-[-2px] md:bottom-[-9px] left-0 h-[3px] 
      hidden sm:block`} // Hide the span below 640px wide (use 'sm:block' to show above 640px)
                            initial={{ width: 0, backgroundColor: "#000" }} // Initial state
                            animate={{
                              width:
                                navCategory === index ||
                                currentCategory === index
                                  ? "100%"
                                  : 0, // 100% width if active or hovered
                              backgroundColor:
                                navCategory === index ? "#293F6F" : "#000", // Color based on active state
                            }}
                            transition={{ duration: 0.35 }} // Smooth transition
                          />
                        </motion.h2>
                      </div>

                      <AnimatePresence>
                        <motion.div
                          className={`submenu-container text-left betweenSmMd:w-[45%] sm:w-[50%] 
                            sm:absolute right-0 relative sm:top-[75px] md:top-[175px]
                            ${navCategory === index ? "h-auto " : "h-[0]"}`}
                          initial="hidden"
                          animate={navCategory === index ? "show" : "hidden"}
                          variants={{
                            hidden: {
                              opacity: 0,
                              zIndex: -1,
                              height: 0,
                              y: 0,
                            },
                            show: {
                              opacity: 1,
                              transition: { staggerChildren: 0.0651 },
                              zIndex: 1,
                              height: "auto",
                            },
                          }}
                          exit={{ opacity: 0 }}
                        >
                          {category.items.map((item, index) =>
                            item.header && item.url === null ? (
                              <motion.h3
                                className="submenu-link text-left block text-[#000000] font-interstate font-[900] text-[20px] sm:text-[23px] leading-[50px] uppercase"
                                key={item.title}
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0 },
                                }}
                              >
                                {item.title}
                              </motion.h3>
                            ) : item.title === "large-break" ? (
                              <motion.hr
                                className="large-break w-full border-t-[1px] border-[#CCCCCC] mb-[50px] mt-[40px] hidden sm:block"
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0 },
                                }}
                              />
                            ) : (
                              <motion.div
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0 },
                                }}
                                // whileTap={{
                                //   scale: 0.98,
                                //   transformOrigin: "center center", // or "center center", "right center" etc.
                                // }}
                              >
                                <a
                                  className="submenu-link-small text-left block font-domine font-[18px] leading-[25px] mb-[15px] sm:mb-[0px] sm:leading-[45px] md:font-[400] text-[#000000] md:text-[19px] md:leading-[50px] origin-top-left"
                                  href={item.url ?? "#"}
                                  key={item.title}
                                >
                                  {item.title}
                                </a>
                              </motion.div>
                            )
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  );
                } else {
                  return (
                    <motion.a
                      className="submenu-link-small text-left font-domine font-[400] text-[#000000] text-[18px] sm:text-[20px] leading-[45px] block"
                      href={category.link}
                      key={category.name}
                    >
                      {category.name}
                    </motion.a>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
