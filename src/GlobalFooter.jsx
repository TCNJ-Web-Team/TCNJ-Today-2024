import "./styles/global-footer.scss";
export default function GlobalFooter() {
  return (
    <div className="global-footer-2022">
      <div className="inner-width">
        <div className="grid-wrapper">
          <a id="logo-container" href="https://tcnj.edu/">
            <img
              src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2021/09/tcnj-compact-logo-site-footer-FINAL-092221-min.png"
              alt="logo"
              className="no-tablet footer-logo"
            />
            <img
              className="tablet-only footer-logo"
              src="https://graduate.tcnj.edu/explore-programs/_nuxt/img/tcnj-logo-tablet.d20ebff.svg"
              alt="TCNJ"
            />
          </a>

          <div className="one-third">
            <h2>Campus</h2>
            <ul>
              <li>
                <a href="https://tcnj.bncollege.com/">Bookstore</a>
              </li>
              <li>
                <a href="https://tcnj.edu/events/">Calendars</a>
              </li>
              <li>
                <a href="https://tcnj.edu/about/campus-info/campus-map/">
                  Campus Map
                </a>
              </li>
              <li>
                <a href="https://eawebprod.tcnj.edu/directory/">Directory</a>
              </li>
              <li>
                <a href="https://tcnj.edu/campus-life/">Housing &amp; Dining</a>
              </li>
              <li>
                <a href="https://library.tcnj.edu/">Library</a>
              </li>
              <li>
                <a href="https://campuslife.tcnj.edu/health-safety/">
                  Safety &amp; Health
                </a>
              </li>
            </ul>
          </div>
          <div className="one-third">
            <h2>Programs</h2>
            <ul>
              <li>
                <a href="https://academics.tcnj.edu/majors/">List of Majors</a>
              </li>
              <li>
                <a href="https://academics.tcnj.edu/undergraduate-study/">
                  Undergraduate Degrees
                </a>
              </li>
              <li>
                <a href="https://graduate.tcnj.edu/graduate-areas-of-study/">
                  Graduate Degrees
                </a>
              </li>
              <li>
                <a href="https://honors.tcnj.edu/">Honors</a>
              </li>
              <li>
                <a href="https://liberallearning.tcnj.edu/">Liberal Learning</a>
              </li>
              <li>
                <a href="https://cge.tcnj.edu/">Study Abroad</a>
              </li>
              <li>
                <a href="https://intersession.tcnj.edu/">Summer &amp; Winter</a>
              </li>
            </ul>
          </div>

          <div className="one-third last">
            <div>
              <h2>Schools</h2>
              <ul>
                <li>
                  <a href="https://artscomm.tcnj.edu/">
                    {" "}
                    Arts &amp; Communication
                  </a>
                </li>
                <li>
                  <a href="https://business.tcnj.edu/">Business</a>
                </li>
                <li>
                  <a href="https://education.tcnj.edu/">Education</a>
                </li>
                <li>
                  <a href="https://engineering.tcnj.edu/">Engineering</a>
                </li>
                <li>
                  <a href="https://ggoe.tcnj.edu/">
                    Graduate, Global, and Online Education
                  </a>
                </li>
                <li>
                  <a href="https://hss.tcnj.edu/">
                    Humanities &amp; Social Sciences
                  </a>
                </li>
                <li>
                  <a href="https://nhs.tcnj.edu/">
                    {" "}
                    Nursing &amp; Health Sciences
                  </a>
                </li>
                <li>
                  <a href="https://science.tcnj.edu/">Science</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          style={{
            backgroundColor: "#7684a3",
            border: "0",
            height: "1px",
            margin: "10px 0px",
            clear: "both",
          }}
        />

        <div className="bottom-container">
          <div className="alignleft">
            <p className="copyright">
              <a href="https://news.tcnj.edu/world-wide-web-disclaimer/">
                {/* Copyright ©<span id="current-year">2025</span> */}
                Copyright ©{new Date().getFullYear()}
              </a>
              <a href="https://tcnj.qualtrics.com//SE/?SID=SV_bIYC9J406pClbHC">
                Contact
              </a>
              <a href="https://careers.tcnj.edu/">Careers at TCNJ</a>
              <a href="https://tcnj.edu/accessibility/">Accessibility</a>
              <a href="https://heoa.tcnj.edu/">Consumer Info</a>
              <a href="https://privacy.tcnj.edu/">Privacy</a>
              <a id="unit">2000 Pennington Road Ewing, NJ 08618</a>
            </p>
          </div>
          <div className="alignright">
            <p className="socialicons">
              <a href="https://www.facebook.com/tcnjlions">
                <img
                  width="24"
                  height="24"
                  alt="facebook icon"
                  src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/facebook-4-32.png"
                />
              </a>
              <a href="https://twitter.com/tcnj">
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
              <a href="https://instagram.com/tcnj_official">
                <img
                  width="24"
                  height="24"
                  alt="instagram icon"
                  src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/instagram-4-32.png"
                />
              </a>
              <a href="https://www.youtube.com/tcnjvideo">
                <img
                  width="24"
                  height="24"
                  alt="youtube icon"
                  src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/youtube-32-rev.png"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
