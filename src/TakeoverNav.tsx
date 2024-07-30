import React from "react";
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
  const { showSiteMenu, toggleSiteMenu } = useStore();

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
                transition: { staggerChildren: 0.0651 },
              },
            }}
            exit={{ opacity: 0 }}
            id="nav-takeover-list"
            className="w-[100%] h-[100%] bg-white bg-opacity-95 absolute top-0 left-0 z-10"
          >
            <div
              id="inner-takeover-nav"
              className="mx-auto py-[50px] md:max-w-[1130px] mdLgPadding relative"
            >
              {navList.map((category) => {
                if (hasItems(category)) {
                  // Category with items
                  return (
                    <div key={category.name}>
                      <h2 className="text-left text-lg font-bold">
                        {category.name}
                      </h2>
                      {category.items.map((item) => (
                        <motion.a
                          className="icon-link text-center leading-[30px] text-[14px] font-[600] font-opensans text-[#000000] block"
                          target="_blank"
                          href={item.url ?? "#"}
                          key={item.title}
                          variants={{
                            hidden: { opacity: 0, x: 15 },
                            show: { opacity: 1, x: 0 },
                          }}
                        >
                          {item.title}
                        </motion.a>
                      ))}
                    </div>
                  );
                } else {
                  // Category without items
                  return (
                    <motion.a
                      className="icon-link text-center leading-[30px] text-[14px] font-[600] font-opensans text-[#000000] block"
                      target="_blank"
                      href={category.link}
                      key={category.name}
                      variants={{
                        hidden: { opacity: 0, x: 15 },
                        show: { opacity: 1, x: 0 },
                      }}
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
