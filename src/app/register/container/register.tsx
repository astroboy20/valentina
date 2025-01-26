import React from "react";
import Image from "next/image";
import { Logo_White } from "@/assets/index";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Register = () => {
  return (
    <main className="h-screen">
      <section className="relative bg-[url('/images/onboarding.svg')] h-screen bg-no-repeat bg-cover w-full inset-0 overflow-y-hidden no-scrollbar">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative inset-0 top-[150px]  w-full flex flex-col gap-6 items-center justify-center text-center">
          <span className="m-auto">
            <Logo_White />
          </span>
          <p className="text-center text-[16px] font-[600] text-white">
            {" "}
            Find your best match for valentines
          </p>
        </div>
      </section>
      <section className=" bg-[#F5F6F0]  rounded-t-[16px] h-[55dvh] fixed bottom-0  w-full">
        <form className="px-6 py-8 flex flex-col  gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] font-[700] text-[700]">
              Create your account
            </h1>
            <p className="text-[16px] font-[600] text-[#616161]">
              Unlock personalized job matches today
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[16px] font-[600] text-[#333333]">
              Email{" "}
            </label>
            <Input
              placeholder=" Type email address"
              className="border border-[#F2F3F6] rounded-[16px] h-[56px] bg-white p-3 text-[16px] font-[500]"
            />
            <div className="mt-2 ">
            <Button className="bg-[#FC5119] rounded-[16px] py-4 px-6 h-[56px] text-white flex items-center gap-1 text-[16px] font-[800] w-full">
              <span>Signup</span>

              <ArrowRight strokeWidth={3} className="w-[18px] h-[15px]" />
            </Button>

            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export { Register };
//
