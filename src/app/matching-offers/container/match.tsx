"use client";

import { Copy } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Match = () => {
  return (
    <main className="min-h-screen bg-[#F5F6F0] p-6">
      {/* Top Bar */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-[#FC5119] text-xl font-bold">VALENTINA</h1>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-900"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* Main Card */}
      <section className="bg-white rounded-[16px] shadow-sm p-6">
        {/* Title */}
        <h2 className="text-center text-[#FC5119] text-[24px] font-[500] mb-6">
          YOU MATCHED!
        </h2>

        {/* Overlapping Avatars + Heart */}
        <div className="flex justify-center items-center mb-6">
          {/* Left Avatar */}
          <div className="relative z-10">
            <div className="rounded-full bg-[#E6F7F0] w-[100px] h-[100px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/avatars/2.png"
                alt="Left match avatar"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Heart in the middle with negative margin for overlap */}
          <div className="mx-[-16px] z-20">
            <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill=" #f472b6 "
                stroke="none"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="relative z-10">
            <div className="rounded-full bg-[#FFF3D0] w-[100px] h-[100px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/avatars/1.png"
                alt="Right match avatar"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Chat Info Section */}
        <p className="text-gray-900 font-medium mb-2">Chat up your match</p>
        <div className="bg-[#F8F8F8] rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/avatars.png"
                alt="Jayson King"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#FC5119] font-medium">Jayson King</p>
              <p className="text-gray-900">090-7281-5692</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export { Match };
