import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ASSETS_BASE_URL } from "@/lib/constants";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={cn(
        "min-h-screen",
        "h-fit",
        "pb-8",
        "px-12",
        "bg-purple",
        "flex",
        "flex-col",
        "items-center",
        "justify-between",
        "mx-auto",
        "gap-y-8"
      )}
    >
      <div
        className={cn(
          "relative",
          // "grid",
          // "grid-cols-1",
          // "grid-rows-2",
          "place-content-center"
        )}
      >
        <h2
          className={cn(
            "font-oswald",
            "title-mask",
            "text-gradient-lavender",
            "start-1"
          )}
        >
          Explore news and features
        </h2>
        <BackgroundImage />
      </div>
      {children}
    </section>
  );
}

function BackgroundImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute",
        "sm:top-full",
        "lg:top-3/4",
        "sm:inset-x-0",
        "md:w-[500px]",
        "mx-auto",
        className
      )}
    >
      <Image
        src={`${ASSETS_BASE_URL}/6543dd67343fe98e99e261b3_noise.png`}
        alt="newsroom banner"
        width={1200}
        height={630}
        className="object-cover"
      />
    </div>
  );
}
