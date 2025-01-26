import { Logo_Small } from "@/assets";
import { ArrowLeft } from "lucide-react";
import React from "react";

const VerifyEmail = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-6 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>
    </main>
  );
};

export { VerifyEmail };
