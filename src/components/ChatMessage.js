import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center my-3">
      <img
        className="h-8"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
      />
      <div>
        <span className="font-bold mr-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
