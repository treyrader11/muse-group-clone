import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ASSETS_BASE_URL } from "@/lib/constants";
import { Back } from "gsap";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className={cn("min-h-screen max-w-none pt-40 pb-8 bg-purple")}>
      <div
        className={cn(
          "max-w-[80vw]",
          "mx-auto",
          "overflow-visible",
          "space-y-2",
          "sm:space-y-24"
        )}
      >
        <h2
          className={cn("font-oswald", "title-mask", "text-gradient-lavender")}
        >
          Explore news and features
        </h2>
        <BackgroundImage />
        {children}
      </div>
    </section>
  );
}

function BackgroundImage() {
  return (
    <div className={cn("absolute top-full lg:top-3/4 inset-x-0 md:w-[500px] mx-auto")}>
      <Image
        src={`${ASSETS_BASE_URL}/6543dd67343fe98e99e261b3_noise.png`}
        alt="newsroom banner"
        width={1200}
        height={630}
        className="object-cover "
      />
    </div>
  );
}
