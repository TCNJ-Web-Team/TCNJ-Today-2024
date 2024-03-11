import React from "react";

interface TagBoardProps {
  //   topNavItems: { id: number; name: string; url: string; topNav: boolean }[];
}

const TagBoardContent: React.FC<TagBoardProps> = () => {
  return (
    <div
      className="bg-white  border-tcnjyellow 
    border-l-[15px] border-r-[15px]
    sm:border-l-[35px] sm:border-r-[35px]
    border-b-[15px] 
    sm:border-b-[35px]
    "
    >
      <div
        id="tagboard-content"
        className="bg-white mx-auto py-[50px] px-[35px] md:max-w-[1128px] mdLgPadding "
      >
        <picture>
          {/* For screens larger than 1249px */}
          <source media="(min-width: 1250px)" srcSet="/tag-desktop.jpg" />
          {/* For screens between 1200px and 1249px */}
          <source media="(min-width: 550px)" srcSet="/tag-tablet.jpg" />
          {/* Default source for smaller screens */}
          <img className="mx-auto" src="/tag-mobile.jpg" alt="Tag Image" />
        </picture>
      </div>
    </div>
  );
};
export default TagBoardContent;
