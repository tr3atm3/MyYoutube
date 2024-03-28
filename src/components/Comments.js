import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_COMMENT_API } from "../utils/constants";
import Comment from "./Comment";

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null);
  const getComments = async () => {
    const data = await fetch(
      `${YOUTUBE_COMMENT_API}${id}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    console.log(json);
    setComments(json.items);
  };

  useEffect(() => {
    getComments();
  }, []);
  if (!comments) return null;
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl mb-4">Comments</h1>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default Comments;
