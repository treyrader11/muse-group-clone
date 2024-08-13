import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  linkTo?: string;
};

export default function Card({
  className,
  children,
  style,
  linkTo,
}: CardProps) {
  if (linkTo) {
    return (
      <Link
        href={linkTo}
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
      </Link>
    );
  }

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
