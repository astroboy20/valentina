import { X } from "lucide-react";
import React from "react";

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
      </section>
    </main>
  );
};

export { Avatar };
