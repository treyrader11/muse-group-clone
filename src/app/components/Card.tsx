import { cn } from "@/lib/utils";
import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Card({ className, children, style }: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        "w-full",
        "px-[40px]",
        "rounded-2xl",
        "xs:rounded-3xl",
        "md:rounded-[2rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
