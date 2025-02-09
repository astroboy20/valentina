"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const colors = [
  {
    id: 1,
    color: "#D0C5FA",
    name: "#D0C5FA",
  },
  {
    id: 2,
    color: "#A3D5F2",
    name: "#A3D5F2",
  },
  {
    id: 3,
    color: "#BDF8DB",
    name: "#BDF8DB",
  },
  {
    id: 4,
    color: "#FAE4B5",
    name: "#FAE4B5",
  },
  {
    id: 5,
    color: "#F4C3AF",
    name: "#F4C3AF",
  },
  {
    id: 6,
    color: "#F3AFC6",
    name: "#F3AFC6",
  },
];

const avatars = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  src: `/images/avatars/${i + 1}.svg`,
}));

const Avatar = () => {
  const router = useRouter();
  const [editButton, setEditButton] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);
  const [imageId, setImageId] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelected = (selected: string) => {
    setSelectedColor(selected);
  };

  const handleImageSelected = (selected: string) => {
    setImage(selected);
    if (typeof window !== "undefined") {
      localStorage.setItem("imageURL", selected);
    }
  };
  const handleImageIdSelected = (selected: number) => {
    setImageId(selected);
  };

  const handleEditButton = () => {
    setEditButton(!editButton);
  };

  return (
    <main className="p-6 bg-[#F5F6F0] flex flex-col gap-10 min-h-screen">
      <header className="flex justify-between items-center ">
        <div className="flex items-center gap-6 text-[16px] font-[600]">
          <X className="h-4 w-4" /> Create your Avatar
        </div>
        <p
          onClick={() => router.replace("/chat")}
          className="text-[16px] font-[500] text-[#EF5DA8]"
        >
          Save
        </p>
      </header>
      {image && (
        <div className="m-auto">
          <Image
            src={image}
            width={135}
            height={135}
            alt={`Avatar ${image}`}
            className="rounded-full"
          />
        </div>
      )}
      {editButton && (
        <section className="flex flex-col gap-4">
          <p className="text-[#616161] text-[16px] font-[400]">Background</p>
          <div className="grid grid-cols-6 w-full gap-4">
            {colors.map((color) => (
              <div
                key={color.id}
                className={cn(
                  "h-11 w-11 rounded-full cursor-pointer transition p-[2px] border-2",
                  selectedColor === color.color
                    ? "border-[4px]"
                    : "border-transparent"
                )}
                style={{
                  borderColor:
                    selectedColor === color.color ? color.color : "transparent",
                }}
                role="button"
                aria-label={`Selected Color ${color.color}`}
                onClick={() => handleColorSelected(color.color)}
              >
                <div
                  className="h-full w-full rounded-full"
                  style={{ background: color.color }}
                ></div>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="flex flex-col gap-4">
        <p className="text-[#616161] text-[16px] font-[400]">Avatars</p>
        <div className="grid grid-cols-6 w-full gap-4">
          {avatars.map((avatar) => (
            <div key={avatar.id}>
              <div
                className={`cursor-pointer transition rounded-full ${
                  imageId === avatar.id
                    ? "border-2 border-[#F4C3AF] p-[2px]"
                    : "border border-transparent"
                }`}
                role="button"
                aria-label={`Select avatar ${avatar.id}`}
                onClick={() => {
                  handleImageIdSelected(avatar.id);
                  handleImageSelected(avatar.src);
                }}
              >
                <Image
                  src={avatar.src}
                  width={50}
                  height={50}
                  alt={`Avatar ${avatar.src}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div>
        <Button
          onClick={handleEditButton}
          variant={"ghost"}
          className="h-[56px] rounded-[40px] border border-[#FC5119] px-6 py-2 text-[#FC5119] text-[16px] font-[500] w-full"
        >
          Edit Avatar
        </Button>
      </div>
    </main>
  );
};

export { Avatar };
