import { Logo_Small } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const ShopOfferDetails = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>
      <section className="flex flex-col gap-3">
        <h1 className="text-[24px] font-[700] text-[#333333]">George’s Shop</h1>
      </section>
      <section className=" w-full flex flex-col gap-6">
        <div className="w-full rounded-[16px] bg-white p-4">
          <Image
            src={"/images/12.svg"}
            width={288}
            height={288}
            alt={"seller-product-image"}
            className="object-cover w-full"
          />
        </div>
        <div className="">
          <Button className="bg-[#FC5119] rounded-full py-4 px-6 h-[56px] text-white flex items-center gap-1 text-[16px] font-[800] w-full">
            <span> Continue to WhatsApp</span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export { ShopOfferDetails };
