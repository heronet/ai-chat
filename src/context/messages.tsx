"use client";

import { Message } from "ai/react";
import { ReactNode, createContext, useState } from "react";

type MessagesContextType = {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
};

export const MessagesContext = createContext<MessagesContextType>({
  messages: [],
  setMessages: (messages: Message[]) => {},
});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}
