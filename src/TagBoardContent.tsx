import React, { useEffect } from "react";

// Extend the Window interface to include tagboardDomain
declare global {
  interface Window {
    tagboardDomain: string;
  }
}

const TagBoardContent: React.FC = () => {
  useEffect(() => {
    // Set the tagboard domain
    window.tagboardDomain = "https://embed.tagboard.com";

    // Create the script element for the tagboard embed
    const script = document.createElement("script");
    script.src = "https://static.tagboard.com/embed/assets/js/embed.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="tagboard-content">
      {/* Inject the tagboard embed */}
      <div className="tagboard-embed" tgb-embed-id="3673" />
    </div>
  );
};

export default TagBoardContent;
