import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_API } from "../utils/constants";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoData, setVideoData] = useState(null);
  const [searchParams] = useSearchParams();
  const [showDesc, setShowDesc] = useState(false);

  const dispatch = useDispatch();
  const id = searchParams.get("v");

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + id + "&key=" + GOOGLE_API_KEY);
    const json = await data.json();

    setVideoData(json.items);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);
  if (!videoData) return null;
  console.log(videoData);
  const { snippet, statistics } = videoData[0];
  return (
    <div className=" flex flex-col w-[90%] items-start my-12 px-12">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="  w-[70%]">
          <iframe
            className="rounded-2xl"
            width="800"
            height="500"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="w-[90%]">
            <h2 className="font-bold text-xl">{snippet?.title}</h2>
            <div className="flex justify-between w-[60%] my-4 items-center">
              <p className="font-bold">{snippet?.channelTitle} </p>
              <button className="bg-gray-300 py-1 px-3 rounded-full">
                {statistics.likeCount} Likes
              </button>
            </div>
            <div className="w-full p-4 bg-gray-300">
              <p>{statistics.viewCount} views</p>
              <p>
                {showDesc
                  ? snippet.description
                  : snippet.description.slice(0, 400)}
                <span
                  className="font-bold cursor-pointer"
                  onClick={() => setShowDesc((prev) => !prev)}
                >
                  {showDesc ? " (Show Less)" : "... (Show More)"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <LiveChat />
        </div>
      </div>
      <div className="w-full mt-8">
        <Comments id={id} />
      </div>
    </div>
  );
};

export default WatchPage;
