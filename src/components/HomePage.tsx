import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main>
      <div className=" bg-black-500">
        <div className="py-24 flex flex-col justify-center items-center gap-4">
          <p className="text-5xl text-center">
            Welcome to <span className="text-blue-500">AI Chat</span>
          </p>
          <Link href={"/chat"}>
            <Button className="max-w-max gap-1">
              <span>Lets Start</span>
              <ArrowRightIcon></ArrowRightIcon>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
