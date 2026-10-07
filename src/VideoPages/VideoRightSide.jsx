import { Dot, EllipsisIcon, EllipsisVertical } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiKey } from "../Pages/Data";

const VideoRightSide = ({ videoData }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=0&key=${ApiKey}`,
        );

        const data = await result.json();

        const relatedVids = data.items
          .filter((item) => item.id !== videoData?.id)
          .slice(0, 10)
          .map((item) => ({
            id: item.id,
            videoId: item.id,
            thumbnail: item.snippet.thumbnails.high.url,
            avatar: item.snippet.thumbnails.default.url,
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            views: Math.floor(Number(item.statistics.viewCount) / 1000) + "K",
            time: new Date(item.snippet.publishedAt).toLocaleDateString(),
          }));

        setRelatedVideos(relatedVids);
      } catch (error) {
        console.error("Error fetching related videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedVideos();
  }, [videoData]);

  return (
    <div>
      <div className="bg-gray-300 rounded-lg">
        <ul className="flex gap-4 px-2 h-10 items-center font-medium overflow-x-auto whitespace-nowrap scrollbar-hide">
          <li className="cursor-pointer">All</li>
          <li className="cursor-pointer">More story</li>
          <li className="cursor-pointer">News more</li>
          <li className="cursor-pointer">Sports</li>
          <li className="cursor-pointer">Games</li>
        </ul>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-500">Loading related videos...</p>
        </div>
      ) : (
        relatedVideos.map((video) => (
          <div
            key={video.id}
            onClick={() =>
              navigate("/videoplaypage", { state: { videoData: video } })
            }
            className="py-2 flex gap-3 hover:bg-gray-200 rounded-lg p-1 cursor-pointer transition-all"
          >
            <img
              className="h-24 w-36 sm:w-40 rounded-xl object-cover shrink-0"
              src={video.thumbnail}
              alt={video.title}
            />

            <div className="flex flex-col flex-grow min-w-0">
              <p className="font-medium text-sm sm:text-base line-clamp-2">{video.title}</p>
              <p className="text-gray-700 text-sm truncate">{video.channel}</p>
              <p className="flex text-gray-700 text-xs items-center">
                <span>{video.views}</span> <Dot size={16} />{" "}
                <span>{video.time}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default VideoRightSide;
