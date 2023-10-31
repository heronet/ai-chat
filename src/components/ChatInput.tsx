"use client";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useContext, useEffect } from "react";
import { MessagesContext } from "@/context/messages";

type Props = {};

const ChatInput = (props: Props) => {
  const { setMessages } = useContext(MessagesContext);
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    initialMessages: [
      {
        content: "Hail, thou whose presence hath graced this stage with words.",
        role: "assistant",
        id: "35adde2b-74c8-4b48-833b-7d777866c0ad",
      },
    ],
  });

  useEffect(() => {
    setMessages(messages);
  }, [JSON.stringify(messages)]);

  return (
    <form className="flex gap-3 px-2 py-4 items-center" onSubmit={handleSubmit}>
      <Textarea
        className="flex-1 rounded border focus:ring-1 px-2"
        placeholder="Type a message..."
        value={input}
        onChange={handleInputChange}
      />
      <Button>Send</Button>
    </form>
  );
};

export default ChatInput;
