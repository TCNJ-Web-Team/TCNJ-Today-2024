// export default function AppListing({ appList }) {
//   console.log(appList);
//   return <div id="app-list"></div>;
// }
import React from "react";

interface AppListingProps {
  appList: { id: number; name: string; url: string; topNav: boolean }[];
}

const AppListing: React.FC<AppListingProps> = ({ appList }) => {
  console.log(appList);
  return (
    <div
      id="app-list"
      className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(255,255,255,0.95)]
      grid grid-cols-2  shadow-sm border-[1px] border-[#e0e0e0]
      sm:top-[10px] sm:grid-cols-3  sm:w-[655px] sm:h-[708px]
      md:w-[630px] md:h-[708px]  md:left-auto md:right-0"
    >
      {appList.map((item, index) => (
        <a
          className="text-center leading-[30px] text-[14px] text-[600] font-opensans text-[#000000] "
          target="_blank"
          href={item.url}
          key={item.id}
        >
          <img
            src={`/icons/${item.name.toLowerCase().replace(/\s+/g, "-")}.svg`}
            alt={item.name}
            className="h-[25px] mx-auto"
          />

          {item.name}
        </a>
      ))}
    </div>
  );
};
export default AppListing;
