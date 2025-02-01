import { Logo_Small } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";
import Image from "next/image";

const sellersInfo = [
  {
    id: 1,
    name: "Ajoke’s Shop",
    src: "/images/1.png",
  },
  {
    id: 2,
    name: "Tiwa Collections",
    src: "/images/2.png",
  },
  {
    id: 3,
    name: "George’s Shop",
    src: "/images/3.png",
  },
  {
    id: 4,
    name: "Banke’s Shop",
    src: "/images/4.png",
  },
  {
    id: 5,
    name: "George’s Shop",
    src: "/images/5.png",
  },
  {
    id: 6,
    name: "Tiwa collections",
    src: "/images/4.png",
  },
  {
    id: 7,
    name: "Tiwa collections",
    src: "/images/4.png",
  },
  {
    id: 8,
    name: "Tiwa collections",
    src: "/images/4.png",
  },
  {
    id: 9,
    name: "Tiwa collections",
    src: "/images/4.png",
  },
];

const ShopOffer = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>
      <section className="flex flex-col gap-3">
        <h1 className="text-[24px] font-[700] text-[#333333]">
          Shop the best offers
        </h1>
        <p className="text-[16px] font-[400] text-[#616161]">
          Chat vendors to get the best deals for valentines
        </p>
      </section>
      <section className="grid grid-cols-3 gap-4  items-center w-full ">
        {sellersInfo.map((info) => (
          <div className="flex flex-col gap-2 mb-2" key={info.id}>
            <div className="w-full">
              <Image
                src={info.src}
                width={99}
                height={130}
                alt={info.name}
                className="object-cover w-full height-[130px] rounded-[8px]"
              />
            </div>
            <p className="text-[12px] font-[600] text-[#616161]">{info.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export { ShopOffer };
