import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // api polling
      //console.log("Api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-gray-200 overflow-y-scroll rounded-lg flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black m-2 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit" + liveMessage);

          dispatch(
            addMessage({
              name: "Ayush Gupta",
              message: liveMessage,
            })
          );

          setLiveMessage("")


        }}
      >
        <input
          type="text"
          className="px-2 w-96"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-4 bg-green-200 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
