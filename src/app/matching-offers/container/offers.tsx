"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Offers =()=> {
  const [showBanner, setShowBanner] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 0,
    seconds: 6,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#FAFAFA]">
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

      {/* Banner */}
      {showBanner && (
        <div className="mx-4 p-4 bg-[#E6F7F0] rounded-lg relative">
          <button onClick={() => setShowBanner(false)} className="absolute right-3 top-3 text-[#2D6A4F]">
            <X className="h-4 w-4" />
          </button>
          <p className="text-[#2D6A4F] pr-6">
            You&apos;re almost there!
            <br />
            Chat with others or shop for valentine special discount offers
          </p>
        </div>
      )}

      {/* Timer Card */}
      <div className="mt-8 mx-4 p-6 bg-white rounded-3xl shadow-sm">
        <div className="relative aspect-square max-w-[280px] mx-auto">
          {/* Progress Circle */}
          <svg className="w-full h-full -rotate-90 transform">
            <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-[#F5F5F5]" strokeWidth="8%" />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              className="fill-none stroke-[#E6F7F0]"
              strokeWidth="8%"
              strokeDasharray="282.6"
              strokeDashoffset="70.65"
              strokeLinecap="round"
            />
          </svg>

          {/* Heart Icon */}
          <div className="absolute top-[12%] right-[18%]">
            <div className="w-5 h-5 bg-pink-400 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>

          {/* Timer Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-gray-500 text-sm mb-1">Time left</span>
            <span className="text-xl font-medium text-gray-900">
              {timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m:{timeLeft.seconds}s
            </span>
          </div>
        </div>

        {/* Match Button */}
        <Button
          className="w-full mt-8 bg-[#F8F8F8] text-gray-900 hover:bg-gray-100 rounded-xl h-12"
          variant="secondary"
        >
          See my match
        </Button>
      </div>
    </div>
  )
}

export {Offers}

