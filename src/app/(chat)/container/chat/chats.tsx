import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ChatsProps {
  chats: {
    id: number;
    src: string;
    name: string;
    message: string;
    time: string;
  }[];
  selectedChat: number | null;
  handleChatClick: (id: number) => void;
}
const Chats = ({ chats, handleChatClick, selectedChat }: ChatsProps) => {
  return (
    <section className="flex flex-col ">
      {chats.map((chat) => (
        <motion.div
          key={chat.id}
          className={`w-full flex gap-3 items-center py-4 px-6 border-b border-b-[#616161] cursor-pointer transition-all ${
            selectedChat === chat.id
              ? "bg-white shadow-md"
              : "bg-[#F5F6F0] hover:bg-gray-200"
          }`}
          onClick={() => handleChatClick(chat.id)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
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
        </motion.div>
      ))}
    </section>
  );
};

export { Chats };


// import Image from "next/image";
// import { motion } from "framer-motion";

// interface ChatProps {
//   chats: { id: number; src: string; name: string; message: string; time: string }[];
//   selectedChat: number | null;
//   handleChatClick: (id: number) => void;
// }

// const Chats: React.FC<ChatProps> = ({ chats, selectedChat, handleChatClick }) => {
//   return (
//     <div className="px-6 space-y-2">
//       {chats.map((chat) => (
//         <motion.div
//           key={chat.id}
//           onClick={() => handleChatClick(chat.id)}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           whileHover={{ scale: 1.02 }}
//           className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all
//             ${
//               selectedChat === chat.id
//                 ? "bg-white shadow-md"
//                 : "bg-[#F5F6F0] hover:bg-gray-200"
//             }`}
//         >
//           <Image src={chat.src} alt={chat.name} width={50} height={50} className="rounded-full" />
//           <div className="flex-1">
//             <h3 className="font-semibold text-[#333]">{chat.name}</h3>
//             <p className="text-sm text-[#717276] truncate">{chat.message}</p>
//           </div>
//           <span className="text-xs text-gray-500">{chat.time}</span>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export { Chats };
