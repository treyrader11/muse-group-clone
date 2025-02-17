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
        target="_blank"
        href={linkTo}
        style={style}
        className={cn(
          "flex",
          "flex-col",
          "relative",
          "w-full",
          "rounded-2xl",
          "sm:rounded-3xl",
          "md:rounded-[2rem]",
          "p-4",
          "overflow-hidden",
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
        "flex",
        "flex-col",
        "relative",
        "w-full",
        // "px-[40px]",
        "rounded-2xl",
        "sm:rounded-3xl",
        "md:rounded-[2rem]",
        "p-4",
        "overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex",
        "justify-between",
        "items-center",

        className
      )}
    >
      {children}
    </header>
  );
}
