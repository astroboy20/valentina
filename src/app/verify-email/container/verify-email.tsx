"use client"
import { Logo_Small } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";


const VerifyEmail = () => {
  const router = useRouter()
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>
      <section className="flex flex-col gap-4">
        <h1 className="text-[24px] font-[700] text-[#333333]">
          Verify your email
        </h1>
        <p className="text-[16px] font-[400] text-[#616161]">
          We sent an email to abc@gmail.com. Click on the link inside to get
          started
        </p>
      </section>
      <section className="flex flex-col gap-4 text-[#FC5119] text-[16px] font-[500]">
        <p>Open Mail App</p>
        <p>Resend Email</p>
      </section>
      <div className="fixed w-[88%] bottom-20 left-1/2 transform -translate-x-1/2 mx-auto">
        <Button onClick={()=>router.push("/payment")} className="bg-[#FC5119] rounded-[16px] py-4 px-6 h-[56px] text-white flex items-center gap-1 text-[16px] font-[800] w-full">
          <span>I've verified my email</span>
        </Button>
      </div>
    </main>
  );
};

export { VerifyEmail };
