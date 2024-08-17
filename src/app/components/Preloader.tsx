"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ASSETS_BASE_URL } from "@/lib/constants";

export default function Preloader({ isInView }: { isInView: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    // overlay container animation
    <div
      className={cn(
        "grid",
        "place-items-center",
        "fixed",
        "inset-0",
        "z-[99]",
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
        {/* <Logo
            retainSize
            color="white"
            className={cn(
              "size-full",
              "transition-all",
              "duration-500",
              "ease-in-out",
              "translate-y-full",
              {
                "translate-y-0": mounted,
              }
            )}
          /> */}
        <MuseGroupLogo
          className={cn({
            "translate-y-0": mounted,
          })}
        />
      </div>
    </div>
  );
}

function MuseGroupLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        // "size-[30%]",
        // "size-full",
        "transition-all",
        "duration-[800ms]",
        "ease-in-out",
        "translate-y-full",
        className
      )}
    >
      <Image
        width={222}
        height={60}
        alt="logo"
        src={`${ASSETS_BASE_URL}/667b40c9f8dacab38d9c0890_logo-white.svg`}
        priority
      />
    </div>
  );
}
