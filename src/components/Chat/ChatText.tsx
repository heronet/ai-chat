"use client";

import { MessagesContext } from "@/context/messages";
import { cn } from "@/lib/utils";
import { Message } from "ai/react";
import { useContext } from "react";

const ChatText = () => {
  const { messages } = useContext(MessagesContext);

  return (
    <div className="flex flex-col flex-1 py-3 h-full relative gap-2 overflow-y-auto ">
      {messages.map((message: Message) => (
        <div
          key={message.id}
          className={cn(
            message.role === "assistant" ? "" : "self-end",
            "border rounded max-w-[85%] px-2 py-1  mx-2 z-10 bg-background text-sm md:text-base"
          )}
        >
          {message.content.split("\n").map((line: string, index: number) => {
            if (line === "") return <p key={index}>&nbsp;</p>;
            return <p key={index}>{line}</p>;
          })}
        </div>
      ))}
    </div>
  );
};

export default ChatText;
