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
        "right-0",
        "top-[8%]",
        // "z-[90]",
        "z-2",
        className
      )}
    >
      {/* https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/6514243500b73ab4728583a9_cross.svg */}
      <Image
        fill
        alt="close"
        src="https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/651426c95acecdb34f8bdbd6_cross.svg"
      />
    </a>
  );
}
