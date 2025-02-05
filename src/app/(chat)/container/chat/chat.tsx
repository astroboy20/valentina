"use client";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { ShowMessage } from "./show-message";
import { Chats } from "./chats";

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
  const [step, setStep] = useState<number>(1);
  return (
    <main className=" bg-[#F5F6F0] flex flex-col gap-5 h-screen">
      <header className=" p-6 flex items-center gap-2">
        <ArrowLeft />
      </header>
      <section className=" px-6 flex flex-col ">
        <h1 className="text-[24px] font-[700] text-[#333333]">Chat</h1>
        <p className="text-[26px] font-[400] text-[#717276]">
          See what others are discussing today
        </p>
      </section>

      {step === 1 && <Chats />}
      {step === 2 && <ShowMessage />}
    </main>
  );
};

export { Chat };
