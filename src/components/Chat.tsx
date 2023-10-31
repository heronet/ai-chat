import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatText from "./ChatText";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="m-4 border rounded w-lg max-w-lg max-h-[94vh] flex flex-col mx-auto relative">
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
