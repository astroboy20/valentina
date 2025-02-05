import { ArrowLeft } from 'lucide-react'
import React from 'react'

const Chat = () => {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
        <header className="flex items-center gap-2">
        <ArrowLeft /> 
      </header>
      <section className="flex flex-col gap-4">
        <h1 className="text-[24px] font-[700] text-[#333333]">
         Chat
        </h1>
        <p>See what others are discussing today</p>
      </section>
    </main>
  )
}

export  {Chat}
