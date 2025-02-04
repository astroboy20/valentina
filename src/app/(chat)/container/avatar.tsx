import { X } from "lucide-react";
import React from "react";

const Avatar = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex justify-between items-center ">
        <div className="flex items-center gap-6 text-[16px] font-[600]">
          <X className="h-4 w-4" /> Create your Avatar
        </div>
        <p className="text-[16px] font-[500] text-[#EF5DA8]">Save</p>
      </header>
    </main>
  );
};

export { Avatar };
