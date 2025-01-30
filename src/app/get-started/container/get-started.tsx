import { Logo_Small } from "@/assets";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getStartedOptions = [
  {
    id: 1,
    type: "Chat with friends",
    description: "Chat with others or shop for valentine special offers",
    src: "/images/chat.svg",
    link: "/chat",
  },
  {
    id: 2,
    type: "Shop valentine offers",
    description: "Chat with others or shop for valentine special offers",
    src: "/images/offers.svg",
    link: "/shop-offers",
  },
  {
    id: 3,
    type: "Matching partners",
    description: "Chat with others or shop for valentine special offers",
    src: "/images/match.svg",
    link: "/matching-offers",
  },
];

const GetStarted = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>
      <section className="flex flex-col gap-2">
        <h1 className="text-[24px] font-[700] text-[#333333]">Get Started</h1>
        <p className="text-[16px] font-[400] text-[#616161]">
          Chat with others or shop for valentine special discount offers
        </p>
      </section>
      <section className="flex flex-col gap-4">
        {getStartedOptions.map((option) => (
          <div
            key={option.id}
            className="flex justify-between items-center bg-white rounded-[12px] px-2 py-6"
          >
            <div>
              <Image
                src={option.src}
                alt={option.type}
                width={96}
                height={86}
              />
            </div>

            <div className="mx-4">
              <h2 className="text-[16px] font-[600] text-[#333333]">{option.type}</h2>
              <p className="text-[12px] font-[450] text-[#757575]">
                {option.description}
              </p>
            </div>

            <Link href={option.link}>
              <ChevronRight className="h-4 w-4 text-black" />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export { GetStarted };
