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
        "w-[202px]",
        "h-[40px]",
        "sm:w-[222px]",
        "sm:h-[60px]",
        "transition-all",
        "duration-[800ms]",
        "ease-in-out",
        "translate-y-full",
        "relative",
        className
      )}
    >
      <Image
        fill
        alt="Muse Group logo"
        src={`${ASSETS_BASE_URL}/667b40c9f8dacab38d9c0890_logo-white.svg`}
      />
    </div>
  );
}
