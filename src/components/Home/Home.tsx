import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Home = () => {
  return (
    <main className="flex flex-col w-full min-h-full items-center gap-5 py-20 bg-gradient-to-b from-zinc-900 via-slate-800 to-zinc-900 overflow-y-auto">
      <div className="flex w-40 h-40 relative ">
        <Image
          className="rounded-full"
          src={"/img/william-shakespeare.jpg"}
          alt="shakespeare"
          fill
        />
      </div>
      <div className="flex flex-col items-center gap-5  px-4">
        <p className="md:text-4xl text-center text-2xl">
          I am
          <span className=" text-cyan-500"> William Shakespeare</span>
        </p>
        <p className=" md:text-xl text-md text-center italic text-blue-100">
          I bid thee to partake in merry conversation. Hail and well met, good
          sir or lady! I entreat thee to partake in a delightful conversation.
          Pray, join me in a chat of wondrous words and thoughtful discourse.
          <br />
          <br />
          Together, let us unravel the mysteries that lie betwixt our minds and
          exchange ideas like gifts of gold. Shall we converse and discover what
          tales our words may unfold?
        </p>
      </div>
      <Link href={"/chat"}>
        <Button className=" max-w-max gap-1">
          <span>Let us converse!</span>
          <ArrowRightIcon />
        </Button>
      </Link>
    </main>
  );
};

export default Home;
