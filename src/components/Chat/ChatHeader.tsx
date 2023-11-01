"use client";

import { MessagesContext } from "@/context/messages";
import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {};

const ChatHeader = (props: Props) => {
  const { isLoading } = useContext(MessagesContext);

  return (
    <div className="flex border-b items-center">
      <Avatar className="mx-3">
        <AvatarImage src="/img/william-shakespeare.jpg" />
        <AvatarFallback>SP</AvatarFallback>
      </Avatar>

      <div className="w-full my-3 mx-1 flex flex-col">
        <span className="text-lg">Shakespeare</span>
        <span className="text-sm text-gray-500">
          {isLoading ? "Typing..." : "Online"}
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
