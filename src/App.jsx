// import "./App.css";
import GlobalHeader from "./GlobalHeader.jsx";
import TopNav from "./TopNav.tsx";
import data from "./assets/app-list.json";

const topMenuIcons = data.filter((app) => app.topNav === true);

function App() {
  return (
    <>
      <GlobalHeader />
      <div id="today-container" className="bg-tcnjyellow">
        <div
          id="top"
          className="flex justify-between items-center bg-tcnjyellow py-[20px] px-[36px] mx-auto md:max-w-[1128px]"
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
    </>
  );
}

export default App;
