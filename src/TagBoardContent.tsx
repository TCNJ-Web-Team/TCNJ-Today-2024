import React from "react";
import { TCNJ_URL } from "../global";

interface TagBoardProps {
  //   topNavItems: { id: number; name: string; url: string; topNav: boolean }[];
}

const TagBoardContent: React.FC<TagBoardProps> = () => {
  return (
    <div id="tagboard-content">
      <picture>
        {/* For screens larger than 1249px */}
        <source
          media="(min-width: 1250px)"
          srcSet={TCNJ_URL + `/tag-desktop.jpg`}
        />
        {/* For screens between 1200px and 1249px */}
        <source
          media="(min-width: 550px)"
          srcSet={TCNJ_URL + `/tag-tablet.jpg`}
        />
        {/* Default source for smaller screens */}
        <img
          className="mx-auto"
          src={TCNJ_URL + `/tag-mobile.jpg`}
          alt="Tag Image"
        />
      </picture>
    </div>
  );
};
export default TagBoardContent;
