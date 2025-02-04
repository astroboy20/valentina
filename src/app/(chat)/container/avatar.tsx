import { X } from "lucide-react";
import React from "react";
import Image from "next/image";

const colors = [
  {
    id: 1,
    color: "#D0C5FA",
    name: "#D0C5FA",
  },
  {
    id: 2,
    color: "#A3D5F2",
    name: "#A3D5F2",
  },
  {
    id: 3,
    color: "#BDF8DB",
    name: "#BDF8DB",
  },
  {
    id: 4,
    color: "#FAE4B5",
    name: "#FAE4B5",
  },
  {
    id: 5,
    color: "#F4C3AF",
    name: "#F4C3AF",
  },
  {
    id: 6,
    color: "#F3AFC6",
    name: "#F3AFC6",
  },
];

const avatars = [
  { id: 1, src: "/images/avatars/1.png" },
  { id: 2, src: "/images/avatars/2.png" },
  { id: 3, src: "/images/avatars/3.png" },
  { id: 4, src: "/images/avatars/4.png" },
  { id: 5, src: "/images/avatars/5.png" },
  { id: 6, src: "/images/avatars/6.png" },
  { id: 7, src: "/images/avatars/7.png" },
  { id: 8, src: "/images/avatars/8.png" },
  { id: 9, src: "/images/avatars/9.png" },
  { id: 10, src: "/images/avatars/10.png" },
  { id: 11, src: "/images/avatars/11.png" },
  { id: 12, src: "/images/avatars/12.png" },
  { id: 13, src: "/images/avatars/13.png" },
  { id: 14, src: "/images/avatars/14.png" },
  { id: 15, src: "/images/avatars/15.png" },
  { id: 16, src: "/images/avatars/16.png" },
  { id: 17, src: "/images/avatars/17.png" },
  { id: 18, src: "/images/avatars/18.png" },
  { id: 19, src: "/images/avatars/19.png" },
  { id: 20, src: "/images/avatars/20.png" },
  { id: 21, src: "/images/avatars/21.png" },
  { id: 22, src: "/images/avatars/22.png" },
  { id: 23, src: "/images/avatars/23.png" },
  { id: 24, src: "/images/avatars/24.png" },
  { id: 25, src: "/images/avatars/25.png" },
  { id: 26, src: "/images/avatars/26.png" },
  { id: 27, src: "/images/avatars/27.png" },
  { id: 28, src: "/images/avatars/28.png" },
  { id: 29, src: "/images/avatars/29.png" },
  { id: 30, src: "/images/avatars/30.png" },
  { id: 31, src: "/images/avatars/31.png" },
  { id: 32, src: "/images/avatars/32.png" },
  { id: 33, src: "/images/avatars/33.png" },
  { id: 34, src: "/images/avatars/34.png" },
  { id: 35, src: "/images/avatars/35.png" },
  { id: 36, src: "/images/avatars/36.png" },
  { id: 37, src: "/images/avatars/37.png" },
  { id: 38, src: "/images/avatars/38.png" },
  { id: 39, src: "/images/avatars/39.png" },
  { id: 40, src: "/images/avatars/40.png" },
  { id: 41, src: "/images/avatars/41.png" },
  { id: 42, src: "/images/avatars/42.png" },
];

// const avatars = Array.from({ length: 42 }, (_, i) => ({
//     id: i + 1,
//     src: `/images/avatars/${i + 1}.png`,
//   }));
  
//   export default avatars;
  

const Avatar = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex justify-between items-center ">
        <div className="flex items-center gap-6 text-[16px] font-[600]">
          <X className="h-4 w-4" /> Create your Avatar
        </div>
        <p className="text-[16px] font-[500] text-[#EF5DA8]">Save</p>
      </header>
      <section className="flex flex-col gap-4">
        <p className="text-[#616161] text-[16px] font-[400]">Background</p>
        <div className="grid grid-cols-6 w-full gap-4">
          {colors.map((color) => (
            <div key={color.id}>
              <div
                className="h-11 w-11 rounded-full"
                style={{ background: `${color.color}` }}
              ></div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-[#616161] text-[16px] font-[400]">Avatars</p>
        <div className="grid grid-cols-6 w-full gap-4">
          {avatars.map((avatar) => (
            <div key={avatar.id}>
              <div className="">
                <Image src={avatar.src} width={50} height={50} alt="avatar" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export { Avatar };
