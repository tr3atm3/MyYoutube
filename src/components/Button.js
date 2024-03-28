import React from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videosSlice";
import { addCurrentButton } from "../utils/appSlice";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const currentBtn = useSelector((store) => store.app.currentBtn);
  const searchByName = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&eventType=${
        name === "live" ? "live" : "none"
      }&maxResults=50&regionCode=IN&safeSearch=strict&type=video&videoCaption=any&videoEmbeddable=true&videoType=any&q=${name}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    dispatch(addVideos(json.items));
  };
  const handleClick = () => {
    searchByName();
    dispatch(addCurrentButton(name));
  };

  return (
    <div>
      <button
        className={` px-3 py-1 mx-3 my-2 rounded-lg ${
          currentBtn === name ? "bg-gray-600" : "bg-gray-200"
        }`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
