"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

export default function Preloader({ isInView }: { isInView: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "grid",
        "place-items-center",
        "fixed",
        "z-[99]",
        "bg-black",
        "size-screen",
        "transition-transform",
        "duration-[600ms]",
        "ease-in-out",
        { "-translate-y-full": !isInView }
      )}
    >
      <div
        className={cn(
          "flex-center",
          "opacity-0",
          "transition-opacity",
          "duration-300",
          "ease-in-out",
          { "opacity-100 delay-800": mounted }
        )}
      >
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
          />
        </div>
      </div>
    </div>
  );
}
