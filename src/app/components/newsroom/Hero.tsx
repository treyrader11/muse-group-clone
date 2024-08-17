import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ASSETS_BASE_URL } from "@/lib/constants";
import Categories from "./Categories";

export default function Hero() {
  return (
    <section
      className={cn(
        "mx-auto",
        "max-w-[80vw]",
        "space-y-2",
        "sm:space-y-24",
        "overflow-visible",
        "pb-8",
      )}
    >
      <h2 className={cn("font-oswald", "title-mask", "text-gradient-lavender")}>
        Explore news and features
      </h2>
      <div className="absolute">
        <Image
          src={`${ASSETS_BASE_URL}/6543dd67343fe98e99e261b3_noise.png`}
          alt="newsroom banner"
          width={1200}
          height={630}
          className="object-cover"
        />
      </div>
      <Categories />
    </section>
  );
}
