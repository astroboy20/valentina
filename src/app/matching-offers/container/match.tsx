"use client";

import { ArrowLeft, Copy } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Logo_Small } from "@/assets";

const Match = () => {
  return (
    <main className="min-h-screen bg-[#F5F6F0] p-6 flex flex-col gap-10 ">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>

      <section className="bg-white rounded-[16px] shadow-sm p-6">
        <h2 className="text-center text-[#FC5119] text-[24px] font-[500] mb-6">
          YOU MATCHED!
        </h2>

        <div className="flex justify-center items-center mb-6">
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

        <div className="bg-[#FAFBF5] rounded-xl p-4 flex flex-col  w-[90%] mx-auto mt-24">
          <div className="flex items-center justify-between ">
            <p className="text-[#616161] text-[12px] font-medium ">
              Chat up your match
            </p>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/avatars/1.png"
                alt="Jayson King"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#FC5119] font-[700] text-[16px]">
                Jayson King
              </p>
              <p className="text-[#333333] text-[12px] font-[500">
                090-7281-5692
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Match };
