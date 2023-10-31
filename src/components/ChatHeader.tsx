type Props = {};

const ChatHeader = (props: Props) => {
  return (
    <div className="flex border-b">
      <h1 className="text-4xl text-center w-full my-2">
        <span className=" text-blue-500">SKPR</span>
        {"-"}
        <span className=" text-red-400">AI</span>
      </h1>
    </div>
  );
};

export default ChatHeader;
