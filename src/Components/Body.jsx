import React, { useState, useEffect } from "react";
import { categories, videos } from "../Pages/FeedData";
import { Link, Route, Routes } from "react-router-dom";
import VideoPlayPage from "../VideoPages/VideoPlayPage";
import { All } from "../BodyNabvarPages/All";
import { Gaming } from "../BodyNabvarPages/Gaming";
import { NewAll } from "../BodyNabvarPages/NewAll";
import { HistorySidebar } from "../SidebarPages/HistorySidebar";
import { SubscribeSidebar } from "../SidebarPages/SubscribeSidebar";
import { ApiKey } from "../Pages/Data";
const ReuseCatagor = () => {
  return (
    <div className="sticky z-40 top-0 bg-white flex w-full items-center">
      <ul className="flex w-full overflow-x-auto scrollbar-hide items-center gap-3 whitespace-nowrap custom-scrollbar px-4 py-3">
        {categories.map((elem, index) => {
          return (
            <li key={index}>
              <Link
                to={elem.path}
                className="text-lg font-medium border-.5 p-3 rounded-lg shadow-sm hover:bg-black hover:text-white text-black bg-gray-100"
              >
                {elem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const VideoInfoReuse = ({ CardName }) => {
  return (
    <div className="py-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {CardName.map((elem, index) => {
        return (
          <Link
            to="/videoplaypage"
            state={{ videoData: elem }}
            key={index}
            className="flex flex-col hover:bg-gray-200 hover:rounded-2xl p-1 gap-1 hover:scale-[1.01] transition-all"
          >
            <img
              className="rounded-xl w-full aspect-video object-cover"
              src={elem.thumbnail}
              alt=""
            />
            <div className="flex items-center gap-2 pt-1">
              <img
                className="h-10 w-10 rounded-full shrink-0"
                src={elem.avatar}
                alt=""
              />
              <p className="font-medium line-clamp-2">{elem.title}</p>
            </div>
            <div className="pl-12">
              <p className="font-normal text-gray-600">{elem.channel}</p>
              <div className="text-gray-600 text-sm">
                {elem.views}k{" "}
                <span className="h-1 w-1 rounded-full border-r-black">.</span>{" "}
                {elem.time} ago
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const Body = () => {
  const [FetchVideo, setFetchVideo] = useState(videos);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      const result = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${ApiKey}`,
      );

      const data = await result.json();

      const newFetchdedVideos = data.items.map((item) => ({
        id: item.id,
        videoId: item.id,
        thumbnail: item.snippet.thumbnails.high.url,
        avatar: item.snippet.thumbnails.default.url,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        views: Math.floor(Number(item.statistics.viewCount) / 1000),
        time: new Date(item.snippet.publishedAt).toLocaleDateString(),
      }));

      setFetchVideo(newFetchdedVideos);
    };

    fetchYoutubeVideos();
  }, []);

  return (
    <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-y-auto bg-white flex flex-col px-2 sm:px-4 md:px-5">
      <Routes>
        {/* Lower Navbar */}

        <Route
          path="/"
          element={
            <>
              <ReuseCatagor />
              <VideoInfoReuse CardName={FetchVideo} />
            </>
          }
        />

        <Route path="/videoplaypage" element={<VideoPlayPage />} />
      </Routes>
    </div>
  );
};

export default Body;
