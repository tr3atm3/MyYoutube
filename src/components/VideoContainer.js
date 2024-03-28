import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerContainer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videosSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.videos);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    dispatch(addVideos(json.items));
  };
  if (videos.length === 0) return <ShimmerContainer />;
  return (
    <div className="mt-2 ml-6 flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link
          key={video?.id?.videoId || video?.id}
          to={"/watch?v=" + video?.id || video?.id?.videoId}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
