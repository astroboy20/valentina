"use client";
import { useParams } from "next/navigation";
import { ShopOfferDetails } from "../container/shop-offer-details";

export default function Page() {
  const params = useParams();
  return (
    <>
      <ShopOfferDetails />
    </>
  );
}
