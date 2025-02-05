import { ArrowLeft } from "lucide-react";
import React from "react";
import Image from "next/image";

const chats = [
  {
    id: 1,
    src: "/images/avatar/1.png",
    name: "Charles",
    message: "",
    time: "2 hrs",
  },
];
const Chat = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft />
      </header>
      <section className="flex flex-col gap-4">
        <h1 className="text-[24px] font-[700] text-[#333333]">Chat</h1>
        <p>See what others are discussing today</p>
      </section>
      <section className="flex flex-col">
        {chats.map((chat) => (
          <div>
            <div>
              <Image src={chat.src} width={50} height={50} alt={chat.name} />{" "}
            </div>
            <div className="flex flex-col">
            <div className="w-full flex justify-between items-center">
                <h3>{chat.name}</h3>
                <p>{chat.time}</p>
            </div>
            <p>{chat.message}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export { Chat };
