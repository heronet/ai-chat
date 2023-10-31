import { ReactNode } from "react";
import { MessagesProvider } from "./messages";

export function Providers({ children }: { children: ReactNode }) {
  return <MessagesProvider>{children}</MessagesProvider>;
}
