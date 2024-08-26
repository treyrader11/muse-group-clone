import { ASSETS_BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type CloseProps = {
  className?: string;
  onClick: () => void;
  iconUrl?: string;
};

export default function Close({ className, onClick, iconUrl }: CloseProps) {
  return (
    <a
      onClick={onClick}
      className={cn(
        "hover:opacity-60",
        "hidden",
        "md:inline-block",
        "ml-auto",
        className
      )}
    >
      <Image
        width={40}
        height={40}
        alt="close button"
        src={`${ASSETS_BASE_URL}/${iconUrl}`}
      />
    </a>
  );
}
