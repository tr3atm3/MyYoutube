import React from "react";

const Comment = ({ data }) => {
  const { textDisplay, authorDisplayName, authorProfileImageUrl } =
    data.snippet.topLevelComment.snippet;
  return (
    <div className="flex items-start mb-8">
      <div className="mr-2 w-[3rem] h-[3rem] overflow-hidden">
        <img
          className="rounded-full w-[13rem] h-full object-left"
          src={authorProfileImageUrl}
          alt="author channel"
        />
      </div>
      <div>
        <h2 className="mb-1 w-[13rem]">{authorDisplayName}</h2>
        <h2>{textDisplay}</h2>
      </div>
    </div>
  );
};

export default Comment;
