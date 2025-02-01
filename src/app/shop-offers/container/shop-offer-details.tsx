import { Logo_Small } from '@/assets'
import { info } from 'console'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ShopOfferDetails = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>
      <section className="flex flex-col gap-3">
        <h1 className="text-[24px] font-[700] text-[#333333]">
        George’s Shop
        </h1>
       
      </section>
      <section className="grid grid-cols-3 gap-4  items-center w-full ">
            <div className="w-full rounded-[16px] p-4">
              <Image
                src={"/images/12.png"}
                width={288}
                height={288}
                alt={info.name}
                className="object-cover w-full height-[130px] rounded-[8px]"
              />
            </div>
            <p className="text-[12px] font-[600] text-[#616161]">{info.name}</p>
         
     
      </section>
    </main>
  )
}

export {ShopOfferDetails}
