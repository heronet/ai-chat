"use client";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useContext, useEffect } from "react";
import { MessagesContext } from "@/context/messages";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

type Props = {};

const ChatInput = (props: Props) => {
  const { setMessages, setIsLoading } = useContext(MessagesContext);

  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat({
      initialMessages: [
        {
          content:
            "Greetings, fair soul! I bid thee a warm hello and extend my well wishes upon thy path.            .",
          role: "assistant",
          id: "35adde2b-74c8-4b48-833b-7d777866c0ad",
        },
      ],
    });

  useEffect(() => {
    setMessages(messages);
  }, [JSON.stringify(messages)]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  return (
    <form className="flex gap-3 px-2 py-4 items-center" onSubmit={handleSubmit}>
      <Textarea
        className="flex-1 rounded border focus:ring-1 px-2"
        placeholder="Type a message..."
        value={input}
        onChange={handleInputChange}
      />
      <Button>
        <PaperPlaneIcon></PaperPlaneIcon>
      </Button>
    </form>
  );
};

export default ChatInput;
