"use client";
import { useSearchParams } from "next/navigation";
import { Payment } from "./container/payment";
import { ProtectedRoute } from "@/provider/protected-route/protected-route";

export default function Page() {
  const searchParams = useSearchParams();
  const reference = searchParams ? searchParams.get("reference") : null;
  return (
    <>
      <>
        <Payment reference={reference} />
      </>
    </>
  );
}
