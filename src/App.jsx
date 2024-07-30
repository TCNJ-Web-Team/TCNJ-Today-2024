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
  return (
    <>
      {/* <StaggeredList /> */}
      <GlobalHeader />
      <div id="today-container" className="bg-tcnjyellow">
        <div
          id="top"
          className="flex justify-between items-center bg-tcnjyellow py-[20px] px-[36px]  lg:px-0 mx-auto md:max-w-[1130px] mdLgPadding"
        >
          <h1
            className="font-chunkfive text-[30px] leading-[54px] text-left text-tcnjblue
        sm:text-[45px] sm:leading-[54px]
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
          <TakeoverNav />
          <div
            className="bg-white mx-auto py-[50px] px-[35px] md:max-w-[1130px] mdLgPadding relative
            
            "
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
