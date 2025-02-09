"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, PlusIcon, SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Message } from "@/provider/interfaces";
import WebSocketInstance from "@/provider/websocket";

interface MessageProps {
  handlePrevStepChange: () => void;
  step: number;
}

// const messages = [
//   {
//     id: 1,
//     type: "incoming",
//     text: "Hey! How's it going?",
//     src: "/images/avatars/1.svg",
//     name: "Charles",
//     time: "2:30 PM",
//   },
//   {
//     id: 2,
//     type: "outgoing",
//     text: "I'm doing great! How about you?",
//     src: "/images/avatars/2.svg",
//     name: "Charles",
//     time: "2:30 PM",
//   },
//   {
//     id: 3,
//     type: "incoming",
//     text: "I'm good too. Just working on some projects. I'm good too. Just working on some projects.I'm good too. Just working on some projects.I'm good too. Just working on some projects.I'm good too. Just working on some projects.",
//     src: "/images/avatars/1.svg",
//     name: "Charles",
//     time: "2:30 PM",
//   },
//   {
//     id: 4,
//     type: "outgoing",
//     text: "That sounds exciting! Tell me more.",
//     src: "/images/avatars/2.svg",
//     name: "Charles",
//     time: "2:30 PM",
//   },
//   {
//     id: 5,
//     type: "incoming",
//     text: "I'm good too. Just working on some projects. I'm good too. Just working on some projects.I'm good too. Just working on some projects.I'm good too. Just working on some projects.I'm good too. Just working on some projects.",
//     src: "/images/avatars/1.svg",
//     name: "Charles",
//     time: "2:30 PM",
//   },
//   {
//     id: 6,
//     type: "outgoing",
//     text: "That sounds exciting! Tell me more.",
//     src: "/images/avatars/2.svg",
//     name: "Charles",
//     time: "2:30 PM",
//   },
//   {
//     id: 7,
//     type: "incoming",
//     text: "I'm good too. Just working on some projects. I'm good too. Just working on some projects.I'm good too. Just working on some projects.I'm good too. Just working on some projects.I'm good too. Just working on some projects.",
//     src: "/images/avatars/1.svg",
//     name: "Charles",
//     time: "2:30 PM",
//   },
//   {
//     id: 8,
//     type: "outgoing",
//     text: "That sounds exciting! Tell me more.",
//     src: "/images/avatars/2.svg",
//     name: "Charles",
//     time: "2:30 PM",
//   },
// ];

const ShowMessage = ({ step, handlePrevStepChange }: MessageProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const image =
    typeof window !== "undefined" && localStorage.getItem("imageURL");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const user = typeof window !== "undefined" && localStorage.getItem("user");
  const data = user ? JSON.parse(user) : null;
  const randomName = data?.randomName;

  const handleIncomingMessage = useCallback((body: Message) => {
    switch (body.variant) {
      case "connection":
        console.log(`ClientID: New Device Connection`);
        break;
      case "chat":
        setMessages((prevMessages) => [...prevMessages, body]);
        break;
      default:
        break;
    }
  }, []);

  const handleSendMessage = useCallback(() => {
    if (inputText.trim() !== "") {
      const message: Message = {
        variant: "chat",
        author: randomName,
        body: inputText,
        imageUrl: image,
      };

      WebSocketInstance.newChatMessage(message);
      setInputText("");
    }
  }, [inputText, randomName, image]);

  useEffect(() => {
    WebSocketInstance.connect(`wss://rexxie-soso.onrender.com/ws/channel`);
    WebSocketInstance.addCallbacks(handleIncomingMessage);
  }, [handleIncomingMessage]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
    <div className=" bg-[#F5F6F0] h-screen flex flex-col">
      {step === 2 && (
        <section className="bg-white p-6 flex gap-3 items-center sticky top-0 w-full z-10 shadow-md">
          <ArrowLeft onClick={handlePrevStepChange} />
          <Image
            src={"/images/avatars/1.svg"}
            width={50}
            height={50}
            alt="profile-picture"
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-[16px] font-[600] text-[#333333]">Charles</h3>
            <p className="text-[16px] font-[400] text-[#616161]">Online</p>
          </div>
        </section>
      )}

      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-230px)] p-4 space-y-4 no-scrollbar">
        {/* {messages.map((msg) => (
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
            <div className="bg-white p-3 rounded-lg max-w-xs">
              <p className="text-[16px] font-[500] text-[#333]">{msg.name}</p>
              <p className="text-[16px] font-[400] text-[#616161]">
                {msg.text}
              </p>
              <p className="text-[12px] font-[400] text-[#616161] ml-auto">
                {msg.time}
              </p>
            </div>
            {msg.type === "outgoing" && (
              <Image
                src={msg.src}
                width={40}
                height={40}
                alt="Avatar"
                className="rounded-full"
              />
            )}
          </div>
        ))} */}
      </div>

      <section className="bg-white p-4 flex gap-3 items-center fixed bottom-0 left-0 w-full border-t shadow-md h-[100px]">
        <div className="w-8 h-8 rounded-[8px] bg-[#EBEBEB] flex justify-center items-center p-2">
          <PlusIcon className="" />
        </div>

        <Input
          className="flex-1"
          placeholder="Write a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div
          onClick={handleSendMessage}
          className="w-8 h-8 rounded-[8px] bg-[#EBEBEB] flex justify-center items-center p-2"
        >
          <SendIcon className="" />
        </div>
      </section>
    </div>
  );
};

export { ShowMessage };
