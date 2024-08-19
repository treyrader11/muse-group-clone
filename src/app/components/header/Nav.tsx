"use client";

import { cn } from "@/lib/utils";
import Logo from "../Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ASSETS_BASE_URL,
  PRODUCTS,
  ROUTES,
  NAV_HEIGHT,
  SMALL_HEIGHT_PERCENTAGE,
} from "@/lib/constants";
import CloseButton from "../CloseButton";
import { motion } from "framer-motion";
import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import Burger from "../Burger";

type NavProps = {
  className?: string;
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: (href: string) => boolean;
};

export default function Nav({
  className,
  setIsProductMenuOpen,
  isActive,
}: NavProps) {
  return (
    <nav
      className={cn(
        "flex",
        "justify-between",
        "gap-x-5",
        "gap-y-[70px]",
        "uppercase",
        "font-oswald",
        "font-semibold",
        "text-5xl",
        // "md:text-3xl",
        "md:text-[30px]",
        // leading only works when text size is arbitrary value
        "leading-6",
        "tracking-tighter",
        // "relative",
        // "z-[999]",
        className
      )}
    >
      {ROUTES.map(({ path, label }) => (
        <Link
          onClick={() => {
            if (path === "/products") setIsProductMenuOpen(true);
            else setIsProductMenuOpen(false);
          }}
          className={cn("hover:opacity-60", {
            "opacity-60": isActive(path),
          })}
          key={path}
          href={path}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

type MobileNavProps = {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
};

export function MobileNav({ children, isActive, className }: MobileNavProps) {
  return (
    <div
      className={cn(
        "z-[88]",
        "fixed",
        // "inset-0",
        // "top-0",
        // "inset-x-0",
        "flex",
        "flex-col",
        "justify-end",
        "bg-grey",
        "w-full",
        "transition-all",
        "duration-[600ms]",
        "ease-in-out",
        "-translate-y-full",
        // Use both screen and svh incase svh is not supported
        "min-h-screen",
        "min-h-[100svh]",
        isActive ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      {children}
    </div>
  );
}
