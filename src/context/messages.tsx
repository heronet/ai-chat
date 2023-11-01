"use client";

import { Message } from "ai/react";
import { ReactNode, createContext, useState } from "react";

type MessagesContextType = {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const MessagesContext = createContext<MessagesContextType>({
  messages: [],
  setMessages: (messages: Message[]) => {},
  isLoading: false,
  setIsLoading: (isLoading: boolean) => {},
});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MessagesContext.Provider
      value={{ messages, setMessages, isLoading, setIsLoading }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
