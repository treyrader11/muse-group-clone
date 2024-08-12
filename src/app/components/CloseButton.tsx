import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function CloseButton({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <a
      onClick={onClick}
      className={cn(
        "hover:opacity-60",
        "cursor-pointer",
        "size-10",
        "absolute",
        "right-0",
        "top-[8%]",
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
