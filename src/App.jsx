// import "./App.css";
import GlobalFooter from "./GlobalFooter.jsx";
import GlobalHeader from "./GlobalHeader.jsx";
import TagBoardContent from "./TagBoardContent.tsx";
import TopNav from "./TopNav.tsx";
import data from "./assets/app-list.json";
import "./App.css";
import AppListing from "./AppListing.tsx";
import TakeoverNav from "./TakeoverNav.tsx";
// import StaggeredList from "./StaggeredTest.tsx";
const topMenuIcons = data.filter((app) => app.topNav === true);

function App() {
  // const phpData = window.PHP_DATA;
  const phpData = {
    bannerImage:
      "http://localhost:10057/wp-content/uploads/2024/12/parent-family-site-billboard-2-FINAL.jpg",
    // bannerLink: "https://tcnj.edu",
    bannerAlt: "ALTERNATIVE TEST",
  };
  console.log(phpData);
  return (
    <>
      {/* <StaggeredList /> */}
      <GlobalHeader />
      <div id="today-container" className="bg-tcnjyellow">
        <div
          id="top"
          className="flex justify-between items-center bg-tcnjyellow px-[36px]  lg:px-0 mx-auto md:max-w-[1130px] mdLgPadding"
        >
          <h1
            className="font-chunkfive text-[30px] leading-[54px] text-left text-tcnjblue
        sm:text-[45px] sm:leading-[54px] py-[20px] sm:py-[30px] 
        "
          >
            TCNJ Today
          </h1>
          <TopNav topNavItems={topMenuIcons} />
        </div>

        <div
          className="bg-white  border-tcnjyellow 
          border-l-[15px] border-r-[15px]
          sm:border-l-[35px] sm:border-r-[35px]
          border-b-[15px] 
          sm:border-b-[35px]  min-h-[2700px] sm:min-h-0
          relative
          "
        >
          {/* PHP GOES HERE FOR BANNER */}
          {phpData != undefined &&
            phpData.bannerImage !== "" &&
            phpData.bannerImage.length > 0 && (
              <div
                id="banner-takeover"
                className="bg-white mx-auto lg:px-0 px-[35px] md:max-w-[1130px] mdLgPadding relative
                md:pt-[75px] pt-[35px]
           "
              >
                {phpData.bannerLink ? (
                  <a href={phpData.bannerLink}>
                    <img
                      src={phpData.bannerImage}
                      alt={phpData.bannerAlt}
                      className="w-[100%]"
                    />
                  </a>
                ) : (
                  <img
                    src={phpData.bannerImage}
                    alt={phpData.bannerAlt}
                    className="w-[100%]"
                  />
                )}
              </div>
            )}
          <TakeoverNav />
          <div
            className={`bg-white mx-auto lg:py-[100px] py-[50px] lg:px-0 px-[35px] md:max-w-[1130px] mdLgPadding relative
            pb-[200px] sm:pb-[50px]
            ${
              phpData.bannerImage !== "" && phpData.bannerImage.length > 0
                ? "lg:pt-[35px] pt-[15px]"
                : ""
            }
            `}
          >
            <AppListing appList={data} />
            <TagBoardContent />
          </div>
        </div>

        {/*       
      <div className="flex flex-wrap">
        {data.map((app, index) => (
          <div
            key={index}
            className="w-1/3 p-4 bg-gray-200 border-2 border-gray-300"
          >
            <h2 className="text-lg font-bold">{app.name}</h2>
            <p>{app.description}</p>
          </div>
        ))}
      </div> */}
      </div>
      <GlobalFooter />
    </>
  );
}

export default App;
