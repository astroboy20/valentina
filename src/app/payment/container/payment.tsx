import { Logo_Small, PaystackIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

const Payment = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>
      <section className="flex flex-col gap-4">
        <h1 className="text-[24px] font-[700] text-[#333333]">
          Continue to make payment
        </h1>
      </section>
      <section className="flex gap-4 items-center bg-white rounded-[8px] p-3">
        <div className="flex items-center gap-1 p-6">
          <PaystackIcon />
          <p className="text-[#011B33] font-[700] text-[14px]">paystack</p>
        </div>

        <div className="flex flex-col gap-3  text-[16px]">
          <p className="text-[#616161] font-[500]">Pay a one-time fee</p>
          <p className="text-[#333333] font-[700]">N 1,000</p>
        </div>
      </section>
      <div className="fixed w-[88%] bottom-20 left-1/2 transform -translate-x-1/2 mx-auto">
        <Button className="bg-[#FC5119] rounded-[16px] py-4 px-6 h-[56px] text-white flex items-center gap-1 text-[16px] font-[800] w-full">
          <span>Continue to Paystack</span>
        </Button>
      </div>
    </main>
  );
};

export { Payment };
