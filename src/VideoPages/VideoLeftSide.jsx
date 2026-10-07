import {
  Download,
  EllipsisVertical,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { ApiKey } from "../Pages/Data";

// Static fallback comments (shown if API doesn't return comments)
const staticComments = [
  {
    id: "static-1",
    authorDisplayName: "@UlahCommedyTv",
    authorProfileImageUrl:
      "https://yt3.ggpht.com/ytc/AIdro_nn2r27xgt-QLsA4NOafS588bIhGJEP80r8XEC4pJEMwtmsmIosL5hG9gzQ2AyEbG8G0A=s88-c-k-c0x00ffffff-no-rj",
    textDisplay: "Let Bangladesh bee from this",
    likeCount: 12,
    publishedAt: "4 hours ago",
  },
  {
    id: "static-2",
    authorDisplayName: "@UlahCommedyTv",
    authorProfileImageUrl:
      "https://yt3.ggpht.com/ytc/AIdro_nn2r27xgt-QLsA4NOafS588bIhGJEP80r8XEC4pJEMwtmsmIosL5hG9gzQ2AyEbG8G0A=s88-c-k-c0x00ffffff-no-rj",
    textDisplay: "Let Bangladesh bee from this",
    likeCount: 5,
    publishedAt: "4 hours ago",
  },
];

const VideoLeftSide = ({ videoData }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [comments, setComments] = useState(staticComments);
  const [commentCount, setCommentCount] = useState(44);
  const videoId = videoData?.id || videoData?.videoId || "Zb1zVeXLUf8";

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const result = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${ApiKey}`,
        );
        const data = await result.json();
        if (data.items && data.items.length > 0) {
          const item = data.items[0];
          setVideoDetails({
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            description: item.snippet.description,
            views: Math.floor(Number(item.statistics.viewCount) / 1000) + "K",
            likes: Math.floor(Number(item.statistics.likeCount) / 1000) + "K",
            publishedAt: new Date(
              item.snippet.publishedAt,
            ).toLocaleDateString(),
          });
          // Update comment count from video statistics if available
          if (item.statistics?.commentCount) {
            setCommentCount(
              Math.floor(Number(item.statistics.commentCount)).toLocaleString(),
            );
          }
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const result = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&key=${ApiKey}`,
        );
        const data = await result.json();

        if (data.items && data.items.length > 0) {
          const fetchedComments = data.items.map((item) => {
            const snippet = item.snippet.topLevelComment.snippet;
            return {
              id: item.id,
              authorDisplayName: snippet.authorDisplayName,
              authorProfileImageUrl: snippet.authorProfileImageUrl,
              textDisplay: snippet.textDisplay,
              likeCount: snippet.likeCount,
              publishedAt: new Date(
                snippet.publishedAt,
              ).toLocaleDateString(),
            };
          });
          setComments(fetchedComments);
        }
        // If no items, keep the static fallback (no change needed)
      } catch (error) {
        // Comments API failed (e.g. disabled comments), keep static data
        console.error("Error fetching comments:", error);
      }
    };

    if (videoId) {
      fetchVideoDetails();
      fetchComments();
    }
  }, [videoId]);

  return (
    <>
      <div className="rounded-3xl overflow-hidden border border-gray-200 w-full aspect-video bg-black">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-3xl w-full h-full"
        ></iframe>
      </div>

      <div className="mt-3">
        <h1 className="text-xl sm:text-2xl font-bold my-1 break-words">
          {videoDetails?.title ||
            videoData?.title ||
            "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"}
        </h1>
      </div>

      <div className="min-h-14 py-2 flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full shrink-0 object-cover"
            src={
              videoData?.avatar ||
              "https://yt3.ggpht.com/Vh9uFoOoGYoFDVYsUjrFzjUegCQq1PI1lwpHR2EcOVbnqQYMqdMGuw81F0HX5XZN-BgZgzWAJA=s48-c-k-c0x00ffffff-no-rj"
            }
            alt=""
          />

          <div className="whitespace-nowrap">
            <p className="font-semibold text-base">
              {videoDetails?.channel || videoData?.channel || "CaseOh"}
            </p>
            <p className="text-xs font-medium text-gray-500">
              10.4M subscribers
            </p>
          </div>

          <button className="rounded-full bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors shrink-0 cursor-pointer">
            Subscribe
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full h-9 px-3 gap-2 cursor-pointer transition-colors text-sm font-medium shrink-0">
            <ThumbsUp size={18} /> <span>{videoDetails?.likes || "10K"}</span>
            <span className="w-px h-4 bg-gray-300 mx-1"></span>
            <ThumbsDown size={18} />
          </div>
          <div className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full h-9 px-3 gap-2 cursor-pointer transition-colors text-sm font-medium shrink-0">
            <Share2 size={18} /> <span>Share</span>
          </div>
          <div className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full h-9 px-3 gap-2 cursor-pointer transition-colors text-sm font-medium shrink-0">
            <Download size={18} /> <span>Download</span>
          </div>
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-gray-100 hover:bg-gray-200/80 transition-colors p-3 rounded-2xl my-3 text-sm">
        <div className="flex gap-2 font-semibold text-gray-900 mb-1">
          <span>{videoDetails?.views || videoData?.views || "322K"} views</span>
          <span>•</span>
          <span>
            {videoDetails?.publishedAt || videoData?.time || "2 days ago"}
          </span>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-1">
            About {videoDetails?.channel || videoData?.channel || "CaseOh"}
          </p>
          <p className="text-gray-800 whitespace-pre-line leading-relaxed">
            {videoDetails?.description ||
              videoData?.description ||
              "Jamuna Television Limited is a privately owned news and current affairs television channel in Bangladesh. Founded in 2014, it is owned by the Jamuna Group."}
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {commentCount} Comments
        </h2>

        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-3 my-4">
            <img
              className="h-10 w-10 rounded-full shrink-0 object-cover"
              src={comment.authorProfileImageUrl}
              alt={comment.authorDisplayName}
            />

            <div className="flex flex-col flex-grow min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-gray-900">
                  {comment.authorDisplayName}
                </span>
                <span className="text-xs text-gray-500">
                  {comment.publishedAt}
                </span>
              </div>
              <p className="text-sm text-gray-800 mt-1">{comment.textDisplay}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                <button className="flex items-center gap-1 hover:text-black cursor-pointer">
                  <ThumbsUp size={16} /> <span>{comment.likeCount}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-black cursor-pointer">
                  <ThumbsDown size={16} />
                </button>
                <button className="font-medium hover:text-black cursor-pointer">
                  Reply
                </button>
              </div>
            </div>

            <EllipsisVertical
              size={18}
              className="cursor-pointer text-gray-500 shrink-0"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoLeftSide;
