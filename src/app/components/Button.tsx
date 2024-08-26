import { cn } from "@/lib/utils";
import React from "react";

type LoadMoreProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function Button({
  onClick,
  className,
  children,
}: LoadMoreProps) {
  return (
    <a
      onClick={onClick}
      aria-label="Next Page"
      className={cn(
        "bg-black",
        "mx-auto",
        "min-h-20",
        "w-full",
        "rounded-xl",
        "sm:rounded-2xl",
        "md:rounded-[32px]",
        "flex-center",
        "sm:min-h-[128px]",
        "hover:bg-neutral-800",
        "text-3xl",
        "sm:text-5xl",
        "font-oswald",
        "uppercase",
        "text-white",
        "font-[500]",
        "tracking-tighter",
        "leading-[44px]",
        className
      )}
    >
      {children}
    </a>
  );
}
