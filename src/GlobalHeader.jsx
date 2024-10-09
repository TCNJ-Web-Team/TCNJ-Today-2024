import { useState, useEffect } from "react";
// import "../styles/accordion-styles.scss";
import "./styles/global-nav.scss";

export default function GlobalHeader() {
  const [open, setOpen] = useState(false);
  const openSideNav = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        // console.log("test key");
      }
    };

    if (open) {
      // Attach the event listener
      document.addEventListener("keydown", handleKeyPress);
    } else {
      // Detach the event listener
      document.removeEventListener("keydown", handleKeyPress);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [open]); // Dependency on 'open' ensures the effect is re-run when 'open' changes

  return (
    <>
      <div className="global-nav">
        <div
          id="slider-container"
          onClick={openSideNav}
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
              src="https://graduate.tcnj.edu/explore-programs/_nuxt/img/tcnj-logo.3f4bf41.svg"
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
              href="https://tcnj.edu/administration/"
            >
              Offices
            </a>

            <img
              id="open-sidebar-button"
              src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2023/07/menu-icon.svg"
              alt="Global Nav Menu"
              onClick={openSideNav}
            />
          </div>
        </div>
      </div>

      <div id="site-header">
        <div id="site-title" className="inner">
          <a id="parent-site"></a>
        </div>
        <div id="site-nav">
          <div className="inner"></div>
        </div>
      </div>
    </>
  );
}
