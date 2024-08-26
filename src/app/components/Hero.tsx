import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ASSETS_BASE_URL } from "@/lib/constants";

type HeroProps = {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: "purple" | "green";
  headlineText?: string;
  backgroundImageUrl?: string;
};

export default function Hero({
  children,
  className,
  backgroundColor,
  headlineText,
  backgroundImageUrl,
}: HeroProps) {
  return (
    <section
      className={cn(
        "min-h-screen",
        "h-fit",
        "pb-8",
        {
          "bg-purple": backgroundColor === "purple",
          "bg-limeGreen": backgroundColor === "green",
        },
        "flex",
        "flex-col",
        "items-center",
        "justify-between",
        "mx-auto",
        "gap-y-8",
        className
      )}
    >
      <div className={cn("relative place-content-center")}>
        {headlineText && (
          <h2
            className={cn("font-oswald", "title-mask", "start-1", {
              "text-gradient-lavender": backgroundColor === "purple",
              "text-gradient-yellow": backgroundColor === "green",
            })}
          >
            {headlineText}
          </h2>
        )}

        {backgroundImageUrl && <BackgroundImage src={backgroundImageUrl} />}
      </div>
      {children}
    </section>
  );
}

type BackgroundImageProps = {
  className?: string;
  src: string;
};

function BackgroundImage({ className, src }: BackgroundImageProps) {
  return (
    <div
      className={cn(
        // "absolute",
        // make this grid
        // "lg:top-3/4",
        // "inset-x-0",
        className
      )}
    >
      <Image
        src={`${ASSETS_BASE_URL}/${src}`}
        alt="Hero background"
        width={1200}
        height={630}
        loading="lazy"
        className="object-cover"
      />
    </div>
  );
}
