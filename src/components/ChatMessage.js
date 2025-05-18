import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-md m-3">
      <img
        className="h-8"
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>

    </div>
  );
};

export default ChatMessage;
