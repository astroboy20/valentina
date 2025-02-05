import { ArrowLeft } from "lucide-react";
import React from "react";
import Image from "next/image";

const chats = [
  {
    id: 1,
    src: "/images/avatars/1.png",
    name: "Charles",
    message: "Heyy, how's it going? I was thinking about our last discussion.",
    time: "2 hrs",
  },
  {
    id: 2,
    src: "/images/avatars/2.png",
    name: "Alice",
    message:
      "Just finished working on my project! It took longer than expected, but I'm happy with the result.",
    time: "5 hrs",
  },
  {
    id: 3,
    src: "/images/avatars/3.png",
    name: "John",
    message:
      "What do you think about the latest tech trends? AI is really changing the game.",
    time: "1 day",
  },
  {
    id: 4,
    src: "/images/avatars/4.png",
    name: "Emma",
    message: "Let's catch up later in the evening. Been super busy today!",
    time: "3 days",
  },
];

const Chat = () => {
  return (
    <main className=" bg-[#F5F6F0] flex flex-col gap-5 h-screen">
      <header className=" p-6 flex items-center gap-2">
        <ArrowLeft />
      </header>
      <section className=" px-6 flex flex-col ">
        <h1 className="text-[24px] font-[700] text-[#333333]">Chat</h1>
        <p>See what others are discussing today</p>
      </section>
      <section className="flex flex-col ">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="w-full flex gap-3 items-center py-4 px-6 border-b border-b-[#616161]"
          >
            <Image
              src={chat.src}
              width={50}
              height={50}
              alt={chat.name}
              className="rounded-full"
            />
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full flex justify-between items-center">
                <h3 className="font-medium text-gray-800">{chat.name}</h3>
                <p className="text-sm text-gray-500">{chat.time}</p>
              </div>
              <p className="text-gray-600 text-sm truncate w-[300px]">
                {chat.message}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export { Chat };
