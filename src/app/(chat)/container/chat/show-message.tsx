import React from "react";
import Image from "next/image";
import { PlusIcon, SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MessageProps {
  handlePrevStepChange: () => void;
}

const messages = [
  {
    id: 1,
    type: "incoming",
    text: "Hey! How's it going?",
    src: "/images/avatars/1.png",
    name: "Charles",
    time: "2:30 PM",
  },
  {
    id: 2,
    type: "outgoing",
    text: "I'm doing great! How about you?",
    src: "/images/avatars/2.png",
    name: "Charles",
    time: "2:30 PM",
  },
  {
    id: 3,
    type: "incoming",
    text: "I'm good too. Just working on some projects.",
    src: "/images/avatars/1.png",
    name: "Charles",
    time: "2:30 PM",
  },
  {
    id: 4,
    type: "outgoing",
    text: "That sounds exciting! Tell me more.",
    src: "/images/avatars/2.png",
    name: "Charles",
    time: "2:30 PM",
  },
];

const ShowMessage = ({ handlePrevStepChange }: MessageProps) => {
  return (
    <div className="p-4 bg-[#F5F6F0] h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-center gap-3 ${
              msg.type === "outgoing" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.type === "incoming" && (
              <Image
                src={msg.src}
                width={30}
                height={30}
                alt="Avatar"
                className="rounded-full"
              />
            )}
            <p
              className={`flex flex-col gap-3 p-3 w-auto max-w-xs rounded-lg ${
                msg.type === "outgoing"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <div className="flex flex-col gap-2">
                <p
                  className={
                    `${msg.type === "incoming"}` ? "mr-auto" : "ml-auto"
                  }
                >
                  {msg.name}
                </p>
                <p>{msg.text}</p>
              </div>

              <p className="ml-auto"> {msg.time}</p>
            </p>
            {msg.type === "outgoing" && (
              <Image
                src={msg.src}
                width={40}
                height={40}
                alt="Avatar"
                className="rounded-full "
              />
            )}
          </div>
        ))}
      </div>
      <section className="bg-white p-6 flex gap-3 items-center fixed left-0 bottom-0 w-full">
        <span>
          <PlusIcon />
        </span>
        <Input />
        <span>
          <SendIcon />
        </span>
      </section>
    </div>
  );
};

export { ShowMessage };
