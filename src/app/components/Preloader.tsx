"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ASSETS_BASE_URL } from "@/lib/constants";

export default function Preloader({ isInView }: { isInView: boolean }) {
  const [mounted, setMounted] = useState(false);

  // useEffect(() => setMounted(true), []);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    // overlay container animation
    <div
      className={cn(
        "grid",
        "place-items-center",
        "fixed", // causes warning in console
        // "absolute", // does not cause warning in console
        "inset-0",
        "z-highest",
        "bg-black",
        "size-screen",
        "transition-transform",
        "duration-[600ms]",
        "ease-in-out",
        { "-translate-y-full": !isInView }
      )}
    >
      {/* Fades out animation / container for logo */}
      <div
        className={cn(
          "h-fit",
          "overflow-hidden",
          "absolute",
          "flex-center",
          "transition-all",
          "duration-300",
          "ease-in-out",
          { "opacity-0 delay-1000": mounted }
        )}
      >
        <Logo
          forPreloader
          className={cn({
            "translate-y-0": mounted,
          })}
        />
      </div>
    </div>
  );
}
