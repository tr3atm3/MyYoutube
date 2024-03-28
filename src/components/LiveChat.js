import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveMessage = useRef(null);
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: "Susanto mahato",
          message: "Hello there",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Tushar Sharma",
        message: liveMessage.current.value,
      })
    );
    liveMessage.current.value = "";
  };

  return (
    <div className=" w-full rounded-xl ml-2 p-2 border border-black bg-gray-200 ">
      <p>Live Chat</p>
      <div className="  h-[450px] overflow-y-scroll flex flex-col-reverse no-scrollbar">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="w-full" onSubmit={handleMessageSubmit}>
        <input
          type="text"
          className="w-[80%] p-2 border border-black rounded-lg "
          ref={liveMessage}
        />
        <button className="px-4 py-2 rounded-lg  bg-green-500">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
