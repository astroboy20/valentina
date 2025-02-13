"use client";

import { ArrowLeft, Copy } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Logo_Small } from "@/assets";
import { useState } from "react";
import toast from "react-hot-toast";

const Match = () => {
  const user =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("user") || "null");

  const handleCopy = (phone: string) => {
    navigator.clipboard
      .writeText(phone)
      .then(() => {
        toast.success("Phone number copied!");
      })
      .catch(() => {
        toast.error("Failed to copy!");
      });
  };

  return (
    <main className="min-h-screen bg-[#F5F6F0] p-6 flex flex-col gap-10">
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
                src="/images/avatars/2.svg"
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
                src="/images/avatars/1.svg"
                alt="Right match avatar"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#FAFBF5] rounded-xl p-4 flex flex-col w-[90%] mx-auto mt-24">
          <div className="flex items-center justify-between">
            <p className="text-[#616161] text-[12px] font-medium">
              Chat up your match
            </p>
          </div>
          {user?.matches && (
            <div className="flex flex-col gap-2 w-full">
              {user?.matches?.map((match: any) => (
                <div key={match?.id} className="flex items-center gap-3 w-full">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/images/avatars/1.svg"
                      alt={match?.randomName}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-2">
                      <p className="text-[#FC5119] font-[700] text-[16px]">
                        {match?.randomName}
                      </p>
                      <p className="text-[#333333] text-[12px] font-[500]">
                        {match?.phoneNumber}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleCopy(match?.phoneNumber)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {user?.matchedTo && (
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/images/avatars/1.svg"
                    alt={user?.matchedTo?.randomName}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#FC5119] font-[700] text-[16px]">
                      {user?.matchedTo?.randomName}
                    </p>
                    <p className="text-[#333333] text-[12px] font-[500]">
                      {user?.matchedTo?.phoneNumber}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleCopy(user?.matchedTo?.phoneNumber)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export { Match };
