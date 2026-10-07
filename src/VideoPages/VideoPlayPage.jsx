import React from "react";
import { useLocation } from "react-router-dom";
import VideoLeftSide from "./VideoLeftSide";
import VideoRightSide from "./VideoRightSide";

const VideoPlayPage = () => {
  const location = useLocation();
  const videoData = location.state?.videoData;
  return (
    <>
      <div className="px-1 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-4 h-full">
        <div className="b-green-500 px-1 sm:px-3 lg:px-5 pt-3">
          <VideoLeftSide videoData={videoData} />
        </div>

        <div className="b-yellow-300 px-1 sm:px-2 pt-3 lg:pt-0">
          <VideoRightSide videoData={videoData} />
        </div>

        {/* Video details below */}
      </div>
    </>
  );
};

export default VideoPlayPage;
