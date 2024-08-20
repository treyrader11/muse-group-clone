import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type CloseProps = {
  className?: string;
  onClick: () => void;
};

export default function Close({ className, onClick }: CloseProps) {
  return (
    <a
      onClick={onClick}
      className={cn(
        "hover:opacity-60",
        "absolute",
        "size-8",
        "right-0",
        "top-[8%]",
        className
      )}
    >
      <Image
        fill
        alt="close"
        src="https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/651426c95acecdb34f8bdbd6_cross.svg"
      />
    </a>
  );
}
