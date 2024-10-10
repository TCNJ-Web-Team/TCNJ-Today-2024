import React, { useEffect, useState } from "react";

// Extend the Window interface to include tagboardDomain
declare global {
  interface Window {
    tagboardDomain: string;
  }
}

const TagBoardContent: React.FC = () => {
  // const [isTagboardLoaded, setIsTagboardLoaded] = useState(false);

  useEffect(() => {
    // Ensure DOM element exists
    const tagboardElement = document.getElementById("tagboard-content");
    if (!tagboardElement) {
      console.error("Tagboard element not found");
      return;
    }

    // Set the tagboard domain
    window.tagboardDomain = "https://embed.tagboard.com";

    // Create and inject the script
    const script = document.createElement("script");
    script.src = "https://static.tagboard.com/embed/assets/js/embed.js";
    script.async = true;

    // Set up the onload event
    // script.onload = () => {
    //   setIsTagboardLoaded(true);
    // };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="tagboard-content">
      {/* Loading message */}
      {/* {!isTagboardLoaded && <p>Loading Tagboard content...</p>} */}
      {/* Tagboard embed will load here */}
      <div className="tagboard-embed" tgb-embed-id="3673" />
    </div>
  );
};

export default TagBoardContent;
