"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo_Small } from "@/assets";
import { useRouter } from "next/navigation";

const Timer = () => {
  const router = useRouter();

  const calculateTimeLeft = () => {
    const targetDate = new Date(new Date().getFullYear(), 1, 14, 0, 0, 0); // Feb 14, 00:00 AM
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showBanner, setShowBanner] = useState(true);
  const timeFinished = Object.values(timeLeft).every((val) => val === 0);

  useEffect(() => {
    if (timeFinished) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeFinished]);

  const handleViewMatch = () => {
    if (timeFinished) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
      router.replace("/login");
    }
  };

  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>

      {showBanner && (
        <div className=" bg-[#CDF3DD] rounded-[16px] p-4 relative">
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-3 top-3 text-[#2D6A4F]"
          >
            <X className="h-4 w-4 text-[#343330]" />
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-[700] text-[#616161]">
              You&apos;re almost there!
            </p>
            <p className="text-[16px] font-[400] text-[#616161]">
              Chat with others or shop for valentine special discount offers
            </p>
          </div>
        </div>
      )}

      <div className="p-6 bg-white rounded-[16px] shadow-sm">
        <div className="relative aspect-square max-w-[280px] mx-auto">
          {/* Progress Circle */}
          <svg className="w-full h-full -rotate-90 transform">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              className="fill-none stroke-[#F5F5F5]"
              strokeWidth="10%"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              className="fill-none stroke-[#E6F7F0]"
              strokeWidth="10%"
              strokeDasharray="282.6"
              strokeDashoffset="70.65"
              strokeLinecap="round"
            />
          </svg>

          {/* Heart Icon */}
          <div className="absolute top-[12%] right-[18%]">
            <div className="w-5 h-5 bg-pink-400 rounded-full flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="white"
                stroke="none"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>

          {/* Timer Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[#616161] text-[16px] font-[400] mb-1">
              Time left
            </span>
            <span className="text-[24px] font-[600] text-[#333333]">
              {timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m:
              {timeLeft.seconds}s
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="w-fit mt-8 bg-[#FC5119] text-[16px] font-[600] text-[white] hover:bg-gray-100 rounded-[40px] h-[56px] py-5 px-8"
            variant="secondary"
            disabled={!timeFinished}
            onClick={handleViewMatch}
          >
            See my match
          </Button>
        </div>
      </div>
    </main>
  );
};

export { Timer };
