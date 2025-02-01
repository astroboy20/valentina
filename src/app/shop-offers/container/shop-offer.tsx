import { Logo_Small } from '@/assets'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const ShopOffer = () => {
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
    <section className="grid grid-cols-3 items-center">
      
    </section>
    
  </main>
  )
}

export  {ShopOffer}