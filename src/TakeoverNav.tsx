import React, { useState } from "react";
import useStore from "./store/menusStore";
import { AnimatePresence, motion } from "framer-motion";
import navList from "./assets/nav-takeover-list.json";

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
  const [hoverStates, setHoverStates] = useState<boolean[]>(
    Array(navList.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    // Set the hover state for the specific index to true
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index: number) => {
    // Set the hover state for the specific index to false
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

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
              hidden: { opacity: 0 },
              show: { opacity: 1, y: 0 },
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
                  return (
                    <div key={category.name} className="flex flex-row">
                      <motion.h2
                        className="relative text-left cursor-pointer block font-alfaslab font-normal text-[50px] leading-[50px] mb-[50px] w-fit"
                        onClick={() => setNavCategory(index)} // Pass a function reference
                        whileTap={{ scale: 0.98 }}
                      >
                        {category.name}
                        <motion.span
                          className="absolute bottom-[-8px] left-0 h-[3px] bg-black"
                          initial={{ width: 0 }}
                          animate={
                            navCategory === index ? "hovered" : "unhovered"
                          } // Update based on navCategory
                          variants={{
                            hovered: { width: "100%" },
                            unhovered: { width: 0 },
                          }}
                          transition={{ duration: 0.35 }} // Adjust the animation duration
                        />
                      </motion.h2>

                      <AnimatePresence>
                        <motion.div
                          className="text-left w-[50%] absolute right-0"
                          initial="hidden"
                          animate={navCategory === index ? "show" : "hidden"}
                          variants={{
                            hidden: { opacity: 0, zIndex: -1 },
                            show: {
                              opacity: 1,
                              y: 0,
                              transition: { staggerChildren: 0.0651 },
                              zIndex: 1,
                            },
                          }}
                          exit={{ opacity: 0 }}
                        >
                          {category.items.map((item, itemIndex) =>
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
                              <motion.hr
                                className="w-full border-t-[1px] border-[#CCCCCC] mb-[50px] mt-[40px]"
                                key={item.title}
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0 },
                                }}
                              />
                            ) : (
                              <motion.a
                                className="relative submenu-link text-left block font-domine font-[400] text-[#000000] text-[19px] leading-[50px] w-fit origin-top-left"
                                target="_blank"
                                href={item.url ?? "#"}
                                key={item.title}
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0 },
                                }}
                                initial="hidden"
                                animate="show"
                                whileTap={{ scale: 0.98 }}
                                onMouseEnter={() => handleMouseEnter(itemIndex)} // Set hovered state to true for this index
                                onMouseLeave={() => handleMouseLeave(itemIndex)} // Set hovered state to false for this index
                              >
                                {item.title}

                                <motion.span
                                  className="absolute left-0 h-[1px] bg-[#cccccc] bottom-[10px]"
                                  initial={{ width: 0 }}
                                  animate={
                                    hoverStates[itemIndex]
                                      ? "hovered"
                                      : "unhovered"
                                  } // Animate based on hover state for this index
                                  variants={{
                                    hovered: { width: "100%" },
                                    unhovered: { width: 0 },
                                  }}
                                  transition={{ duration: 0.35 }} // Adjust the animation duration
                                />
                              </motion.a>
                            )
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  );
                } else {
                  return (
                    <motion.a
                      className="text-left font-domine font-[400] text-[#000000] text-[20px] leading-[45px] block"
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
