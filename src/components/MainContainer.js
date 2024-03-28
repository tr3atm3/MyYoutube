import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-[100%] overflow-x-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;