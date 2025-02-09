"use client";
import { Logo_Small, PaystackIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { usePaymentQuery } from "@/provider/store/user-api";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface PaymentProps {
  reference: string | any;
}

const Payment = ({ reference }: PaymentProps) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, []);

  const { data, isLoading } = usePaymentQuery(
    { reference },
    { skip: !reference } 
  );

  useEffect(() => {
    if (!isLoading && data) {
      if (data?.data?.isPaid === true) {
        router.replace("/get-started");
      } else {
        setIsChecking(false);
      }
    }
  }, [data, isLoading, router]);

  if (isLoading || isChecking || !user) {
    return (
      <div className="h-screen flex justify-center items-center">
        <ClipLoader />
      </div>
    );
  }

  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 h-screen">
      <header className="flex items-center gap-2">
        <ArrowLeft /> <Logo_Small />
      </header>
      <section className="flex flex-col gap-4">
        <h1 className="text-[24px] font-[700] text-[#333333]">
          Continue to make payment
        </h1>
      </section>
      <section className="flex gap-4 items-center bg-white rounded-[8px] p-3">
        <div className="flex items-center gap-1 p-6">
          <PaystackIcon />
          <p className="text-[#011B33] font-[700] text-[14px]">paystack</p>
        </div>

        <div className="flex flex-col gap-3 text-[16px]">
          <p className="text-[#616161] font-[500]">Pay a one-time fee</p>
          <p className="text-[#333333] font-[700]">N 1,000</p>
        </div>
      </section>
      <div className="fixed w-[88%] bottom-20 left-1/2 transform -translate-x-1/2 mx-auto">
        <Button
          onClick={() => user && router.push(user.paymentUrl)}
          className="bg-[#FC5119] rounded-[16px] py-4 px-6 h-[56px] text-white flex items-center gap-1 text-[16px] font-[800] w-full"
        >
          <span>Continue to Paystack</span>
        </Button>
      </div>
    </main>
  );
};

export { Payment };
