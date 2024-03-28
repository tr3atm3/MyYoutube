import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-80 m-4  ">
      <div>
        <img
          className="rounded-2xl mb-2 cursor-pointer"
          src={thumbnails.medium.url}
          alt=""
        />
      </div>
      <div className="w-[90%] px-4">
        <p className="font-bold">{title}</p>
        <h2 className="text-gray-800">{channelTitle}</h2>
        <div>
          <p className="text-gray-800">
            {Math.round(statistics?.viewCount / 100000, 2)}M views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
