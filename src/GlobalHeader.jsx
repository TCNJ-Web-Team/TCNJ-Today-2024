/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./styles/global-nav.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalHeader({ displaySearch, handleDisplaySearch }) {
  const [open, setOpen] = useState(false);

  const openSideNav = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setOpen(!open);
  };

  const handleClickOutside = (e) => {
    // Only close if clicking the overlay area (slider-container) but not the navigation content
    if (e.target.id === "slider-container") {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [open]);

  return (
    <div className="bg-tcnjblue">
      <AnimatePresence>
        {displaySearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden relative z-[100000001]"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-tcnjblue z-[100000001]"
            >
              <div
                id="top-search-bar"
                className="bg-tcnjblue mx-auto py-[15px] max-w-[1130px] px-[36px] lg:px-0 relative"
              >
                <form
                  id="cse-search-box"
                  action="//tcnj.edu/search/"
                  className="bg-transparent flex items-center"
                >
                  <label className="visually-hidden " htmlFor="g-search">
                    Search
                  </label>
                  <input
                    type="hidden"
                    name="cx"
                    value="016215932862171572185:xlzcmqlxfr0"
                  />
                  <input type="hidden" name="cof" value="FORID:10" />
                  <input type="hidden" name="ie" value="UTF-8" />
                  <input type="hidden" name="hq" value="-inurl:https" />
                  <input
                    id="g-search"
                    type="text"
                    name="q"
                    className="search-icon bg-transparent text-[26px] text-white font-opensans w-full border-[0px] border-b-[1px] border-darklinkblue rounded-[5px] px-[20px] py-[10px] focus:outline-none focus:border-darklinkblue focus:ring-1 focus:ring-darklinkblue"
                    placeholder="Search tcnj.edu"
                  />
                  <input
                    id="SearchButton"
                    type="submit"
                    name="sa"
                    value=""
                    className="absolute right-[60px] lg:right-[20px] w-[15px] h-[15px] bg-no-repeat bg-center bg-contain cursor-pointer"
                    style={{
                      backgroundImage: `url('https://today.tcnj.edu/custom/tcnj-today/search-icon.svg')`,
                    }}
                  />
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="global-nav">
        <div
          id="slider-container"
          onClick={handleClickOutside}
          className={open ? "open" : ""}
        >
          <img
            id="close-button"
            src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2023/07/close-button.svg"
            onClick={openSideNav}
          />
          <div id="nav-container">
            <div id="slider-nav">
              <div
                className="tcnj-global-search-panel"
                style={{ textAlign: "center" }}
              >
                <form id="cse-search-box" action="//tcnj.edu/search/">
                  <label className="visually-hidden" htmlFor="g-search">
                    Search
                  </label>
                  <input
                    type="hidden"
                    name="cx"
                    value="016215932862171572185:xlzcmqlxfr0"
                  />
                  <input type="hidden" name="cof" value="FORID:10" />
                  <input type="hidden" name="ie" value="UTF-8" />
                  <input type="hidden" name="hq" value="-inurl:https" />
                  <input
                    id="g-search"
                    type="text"
                    name="q"
                    className="search-icon"
                    placeholder=""
                  />
                  <input
                    id="SearchButton"
                    value="submit"
                    type="submit"
                    name="sa"
                  />
                </form>
              </div>

              <div className="global-nav-panel">
                <a href="https://www.tcnj.edu">TCNJ Home</a>
                <a href="https://tcnj.edu/about/">About</a>
                <a href="https://academics.tcnj.edu">Academics</a>
                <a href="https://admissions.tcnj.edu/">Admissions</a>
                <a href="https://www.tcnjathletics.com/">Athletics</a>
                <a href="https://campuslife.tcnj.edu/">Campus Life</a>
                <a href="https://library.tcnj.edu/">Library</a>
              </div>

              <div className="flex-menu">
                <a href="https://tcnj.edu/a-z/">A-Z</a>
                <a href="https://www.tcnj.edu/directories">Directory</a>
                <a href="https://tcnj.edu/about/campus-info/campus-map/">Map</a>
                <a href="https://tcnj.edu/administration/">Offices</a>
              </div>

              <div id="social-icons" className="flex-menu">
                <a href="http://www.facebook.com/tcnjlions">
                  <img
                    width="24"
                    height="24"
                    alt="facebook icon"
                    src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/facebook-4-32.png"
                  />
                </a>
                <a href="http://twitter.com/tcnj">
                  <img
                    width="24"
                    height="24"
                    alt="twitter icon"
                    src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/twitter-4-32.png"
                  />
                </a>
                <a href="https://www.linkedin.com/school/the-college-of-new-jersey/">
                  <img
                    width="24"
                    height="24"
                    alt="linkedin icon"
                    src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/linkedin-4-32.png"
                  />
                </a>
                <a href="http://instagram.com/tcnj_official">
                  <img
                    width="24"
                    height="24"
                    alt="instagram icon"
                    src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/instagram-4-32.png"
                  />
                </a>
                <a href="http://www.youtube.com/tcnjvideo">
                  <img
                    width="24"
                    height="24"
                    alt="youtube icon"
                    src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/youtube-32-rev.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="inner">
          <a style={{ display: "flex" }} href="https://tcnj.edu/">
            <img
              id="tcnj-logo"
              src="https://tcnj.edu/custom/brand/nav/tcnj-logo-header.svg"
              alt="TCNJ"
            />
          </a>
          <div className="nav-menu">
            <a href="https://admissions.tcnj.edu/apply/">Apply</a>
            <a href="https://admissions.tcnj.edu/visit/">Visit</a>
            <a href="https://give.tcnj.edu/">Give</a>
            <span className="desktop-global-nav-item">|</span>
            <a
              className="desktop-global-nav-item"
              href="https://alumni.tcnj.edu/"
            >
              Alumni
            </a>
            <a
              className="desktop-global-nav-item"
              href="https://parents.tcnj.edu/"
            >
              Parents
            </a>
            <a
              className="desktop-global-nav-item"
              href="https://eawebprod.tcnj.edu/directory/"
            >
              Directory
            </a>
            <a
              className="desktop-global-nav-item"
              href="https://tcnj.edu/administration/"
            >
              Offices
            </a>

            <img
              id="open-sidebar-button"
              src="https://today.tcnj.edu/custom/tcnj-today/search-icon.svg"
              alt="Global Nav Menu"
              onClick={handleDisplaySearch}
            />
            <img
              id="open-sidebar-button"
              src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2023/07/menu-icon.svg"
              alt="Global Nav Menu"
              onClick={openSideNav}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
