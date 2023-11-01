"use client";

import { MessagesContext } from "@/context/messages";
import { Message } from "ai/react";
import { useContext } from "react";

const ChatText = () => {
  const { messages } = useContext(MessagesContext);

  return (
    <div className="flex flex-col flex-1 py-3 h-full relative gap-2 overflow-y-auto ">
      {messages.map((message: Message) =>
        message.role === "assistant" ? (
          <span
            key={message.id}
            className="border rounded max-w-[80%] px-2 py-1  mx-2 z-10 bg-background"
          >
            {message.content}
          </span>
        ) : (
          <span
            key={message.id}
            className="self-end border rounded max-w-[80%] px-2 py-1  mx-2 z-10 bg-background"
          >
            {message.content}
          </span>
        )
      )}
    </div>
  );
};

export default ChatText;
