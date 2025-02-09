"use client"
import { useSearchParams } from "next/navigation";
import { Payment } from "./container/payment";

export default function Page() {
  const searchParams = useSearchParams()
  const reference = searchParams ? searchParams.get("reference") : null
  return (
    <>
      <Payment reference = {reference}/>
    </>
  );
}
