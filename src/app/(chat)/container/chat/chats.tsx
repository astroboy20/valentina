import Image from "next/image";
import React from "react";
interface Chats {
  id: number;
  src: string;
  name: string;
  time: string;
  message: string;
}
interface ChatsProps {
  chats: Chats[];
}
const Chats = ({ chats }: ChatsProps) => {
  return (
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
              <h3 className="text-[16px] font-[600] text-[#333333]">
                {chat.name}
              </h3>
              <p className="text-[12px] font-[500] text-[#616161]">
                {chat.time}
              </p>
            </div>
            <p className="text-[#616161] text-[16px] font-[400] truncate w-[300px]">
              {chat.message}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export { Chats };
