"use client"

import { Copy } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Match =()=> {
  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      {/* Header */}
      <header className="flex items-center gap-2 p-4">
        <button className="text-gray-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-[#FF4D4D]">VALENTINA</h1>
      </header>

      {/* Match Card */}
      <div className="mt-4 mx-4 p-6 bg-white rounded-3xl shadow-sm">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-gray-900"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>

        {/* Match Title */}
        <h2 className="text-center text-[#FF4D4D] text-2xl font-bold mb-8">YOU MATCHED!</h2>

        {/* Profile Pictures */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="w-24 h-24 rounded-full bg-[#E6F7F0] flex items-center justify-center">
            <Image src="/placeholder.svg" alt="Your profile" width={80} height={80} className="rounded-full" />
          </div>

          {/* Heart */}
          <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center -mt-12">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <div className="w-24 h-24 rounded-full bg-[#FFF3D0] flex items-center justify-center">
            <Image src="/placeholder.svg" alt="Match profile" width={80} height={80} className="rounded-full" />
          </div>
        </div>

        {/* Chat Section */}
        <div className="bg-[#F8F8F8] rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Jayson King"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">Chat up your match</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900">Jayson King</span>
                  <span className="text-gray-500">090-7281-5692</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export {Match}
