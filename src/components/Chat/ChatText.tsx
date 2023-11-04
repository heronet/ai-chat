"use client";

import { MessagesContext } from "@/context/messages";
import { cn } from "@/lib/utils";
import { Message } from "ai/react";
import { useContext, useEffect, useRef } from "react";

const ChatText = () => {
  const { messages } = useContext(MessagesContext);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) divRef.current.scrollTop = divRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      className="flex flex-col flex-1 py-3 h-full relative gap-2 overflow-y-auto "
      ref={divRef}
    >
      {messages.map((message: Message) => (
        <div
          key={message.id}
          className={cn(
            message.role === "assistant" ? "" : "self-end",
            "max-w-[85%] z-10 bg-background text-sm md:text-base"
          )}
        >
          <p className="max-w-max border rounded whitespace-pre-wrap px-2 py-1 mx-2">
            {message.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatText;
