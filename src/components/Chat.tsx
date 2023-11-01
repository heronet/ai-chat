import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatText from "./ChatText";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="relative border rounded min-h-full flex flex-col max-w-4xl mx-auto">
      <ChatHeader />
      <ChatText />
      <ChatInput />
      <p className="text-3xl absolute w-full text-center top-[50%] mx-auto text-gray-700">
        SKPR AI
      </p>
    </div>
  );
};

export default Chat;
