"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const user =
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("user") || "null");

    if (!user || user?.isPaid === false) {
      router.replace("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return null;
  return <>{children}</>;
};

export { ProtectedRoute };
