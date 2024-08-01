import React from "react";
import useStore from "./store/menusStore";
import { AnimatePresence, motion } from "framer-motion";
import navList from "./assets/nav-takeover-list.json";
import "./styles/submenu-animation.scss";
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
  const { showSiteMenu, toggleSiteMenu, navCategory, setNavCategory } =
    useStore();

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
                // transition: { staggerChildren: 0.0651 },
              },
            }}
            exit={{ opacity: 0 }}
            id="nav-takeover-list"
            className="w-[100%] h-[100%] bg-white bg-opacity-95 absolute top-0 left-0 z-10"
          >
            <div
              id="inner-takeover-nav"
              className="mx-auto py-[175px] md:max-w-[1130px] mdLgPadding relative"
            >
              {navList.map((category, index) => {
                if (hasItems(category)) {
                  // Category with items
                  return (
                    <div key={category.name} className="flex flex-row">
                      <motion.h2
                        className="relative text-left  cursor-pointer block font-alfaslab font-normal text-[50px] leading-[50px] mb-[50px] w-fit"
                        onClick={() => setNavCategory(index)} // Pass a function reference
                        whileTap={{ scale: 0.98 }}
                        whileHover="hovered" // Reference to hover animation
                      >
                        {category.name}

                        <motion.span
                          className="absolute  bottom-[-9px] left-0 h-[3px] bg-[black]"
                          initial={{ width: 0 }} // Initial width of the border
                          variants={{
                            hovered: { width: "100%" }, // Full width on hover
                            unhovered: { width: 0 }, // Reset width when not hovered
                          }}
                          transition={{ duration: 0.35 }} // Adjust the animation duration
                        />
                      </motion.h2>

                      <AnimatePresence>
                        <motion.div
                          className="text-left w-[50%] absolute  right-0"
                          initial="hidden"
                          animate={navCategory === index ? "show" : "hidden"}
                          variants={{
                            hidden: {
                              opacity: 0,
                              zIndex: -1,
                              // transition: {
                              //   staggerChildren: 0.0151,
                              //   staggerDirection: 1,
                              // },
                            },
                            show: {
                              opacity: 1,
                              y: 0,
                              transition: { staggerChildren: 0.0651 },
                              zIndex: 1,
                            },
                          }}
                          exit={{ opacity: 0 }}
                        >
                          {category.items.map((item, index) =>
                            item.header && item.url === null ? (
                              <motion.h3
                                className="submenu-link text-left block text-[#000000] font-interstate font-[900] text-[23px] leading-[50px] uppercase"
                                key={item.title}
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0 },
                                }}
                              >
                                {item.title}
                              </motion.h3>
                            ) : item.title === "large-break" ? (
                              // <motion.p
                              //   className="large-break-class"
                              //   key={item.title}
                              //   variants={{
                              //     hidden: { opacity: 0, x: -15 },
                              //     show: { opacity: 1, x: 0 },
                              //   }}
                              // >
                              //   ---
                              //   </motion.p>
                              <motion.hr
                                className="w-full border-t-[1px] border-[#CCCCCC] mb-[50px] mt-[40px]"
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0 },
                                }}
                              />
                            ) : (
                              <motion.a
                                className="submenu-link-small text-left block font-domine font-[400] text-[#000000] text-[19px] leading-[50px] origin-top-left"
                                target="_blank"
                                href={item.url ?? "#"}
                                key={item.title}
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0 },
                                }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {item.title}
                              </motion.a>
                            )
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  );
                } else {
                  // Category without items
                  return (
                    <motion.a
                      className="submenu-link-small text-left font-domine font-[400] text-[#000000] text-[20px] leading-[45px] block"
                      target="_blank"
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
