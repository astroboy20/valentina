"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, ReactNode } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user") || "null")
        : null;

    if (!user || user?.isPaid === false) {
      setTimeout(() => {
        toast.error(
          "Please complete your payment before accessing your match."
        );
      }, 100);

      router.replace("/payment");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) return null;
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export { ProtectedRoute };
