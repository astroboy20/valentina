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
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Register = () => {
  const router = useRouter();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [userDetails, setUserDetails] = useState({
    email: "",
    phoneNumber: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenderChange = (value: string) => {
    setUserDetails((prevData) => ({
      ...prevData,
      gender: value.toUpperCase(), // Ensuring it's in uppercase
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userDetails?.email && userDetails?.phoneNumber) {
      try {
        const registerResponse = await registerUser(userDetails).unwrap();
        console.log("Response:", registerResponse);
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(registerResponse?.data));
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
      <section className="fixed bg-[url('/images/onboarding.svg')] h-screen bg-no-repeat bg-cover w-full inset-0 overflow-y-hidden no-scrollbar">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative inset-0 top-[50px]  w-full flex flex-col gap-2 items-center justify-center text-center">
          <div className="m-auto">
            {/* <Logo_White /> */}
            <Image
              src={"/images/valentina-bg.png"}
              width={300}
              height={300}
              className="w-auto h-auto object-contain"
              alt="Valentina-logo"
            />
          </div>
          {/* <p className="text-center text-[16px] font-[600] text-white">
            {" "}
            Find your best match for valentines
          </p> */}
        </div>
      </section>
      <section className=" bg-[#F5F6F0]  rounded-t-[16px] h-[60dvh] overflow-y-scroll no-scrollbar fixed bottom-0  w-full">
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
            <div className="flex flex-col gap-3">
              <label className="text-[16px] font-[600] text-[#333333]">
                Email{" "}
              </label>
              <Input
                placeholder=" Type email address"
                name="email"
                type="email"
                value={userDetails.email}
                onChange={handleChange}
                required
                className="border border-[#F2F3F6] rounded-[16px] h-[56px] bg-white p-3 text-[16px] font-[500]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[16px] font-[600] text-[#333333]">
                Phone Number{" "}
              </label>
              <Input
                placeholder=" Enter your Phone Number"
                name="phoneNumber"
                type="text"
                value={userDetails.phoneNumber}
                onChange={handleChange}
                required
                className="border border-[#F2F3F6] rounded-[16px] h-[56px] bg-white p-3 text-[16px] font-[500]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[16px] font-[600] text-[#333333]">
                Gender{" "}
              </label>
              <Select onValueChange={handleGenderChange}>
                <SelectTrigger className="w-full border border-[#F2F3F6] rounded-[16px] h-[56px] bg-white p-3 text-[16px] font-[500]">
                  <SelectValue placeholder="Select your Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="M">Male</SelectItem>
                  <SelectItem value="F">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

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
