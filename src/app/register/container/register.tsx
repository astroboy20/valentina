"use client";
import React, { useState, FormEvent } from "react";
import { Logo_White } from "@/assets/index";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRegisterMutation } from "@/provider/store/user-api";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link"
const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [registerUser, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      try {
        console.log("Sending email:", email); // Debugging
        const registerResponse = await registerUser({ email }).unwrap();
        console.log("Response:", registerResponse);
        if(typeof window !=="undefined"){
          localStorage.setItem("user", JSON.stringify(registerResponse?.data))
        }
        toast.success(registerResponse?.message);
        router.replace("/payment");
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  return (
    <main className="h-screen">
      <section className="relative bg-[url('/images/onboarding.svg')] h-screen bg-no-repeat bg-cover w-full inset-0 overflow-y-hidden no-scrollbar">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative inset-0 top-[150px]  w-full flex flex-col gap-6 items-center justify-center text-center">
          <span className="m-auto">
            <Logo_White />
          </span>
          <p className="text-center text-[16px] font-[600] text-white">
            {" "}
            Find your best match for valentines
          </p>
        </div>
      </section>
      <section className=" bg-[#F5F6F0]  rounded-t-[16px] h-[55dvh] fixed bottom-0  w-full">
        <form
          className="px-6 py-8 flex flex-col  gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] font-[700] text-[700]">
              Create your account
            </h1>
            <p className="text-[16px] font-[600] text-[#616161]">
              Unlock personalized job matches today
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[16px] font-[600] text-[#333333]">
              Email{" "}
            </label>
            <Input
              placeholder=" Type email address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-[#F2F3F6] rounded-[16px] h-[56px] bg-white p-3 text-[16px] font-[500]"
            />
            <div className="mt-2 flex flex-col gap-2">
              <Button className="bg-[#FC5119] rounded-[16px] py-4 px-6 h-[56px]  w-full">
                {isLoading ? (
                  <ClipLoader color="#ffffff" />
                ) : (
                  <div className="text-white flex items-center gap-1 text-[16px] font-[800]">
                    <span>Signup</span>
                    <ArrowRight strokeWidth={3} className="w-[18px] h-[15px]" />
                  </div>
                )}
              </Button>
              <div className="text-center">
                Already have an account?{" "}
                <Link className="underline text-[#FC5119]" href="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export { Register };
//
