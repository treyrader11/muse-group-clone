import React from "react";
import Card from "../Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ASSETS_BASE_URL, BANNERS } from "@/lib/constants";

const imageProps = {
  alt: "Arrow icon",
  width: 64,
  height: 64,
  className: "pt-[125%] mb-[68px]",
};

export default function Banners() {
  return (
    <section
      className={cn(
        "grid",
        "grid-cols-1",
        "md:grid-cols-2",
        "gap-4",
        "lg:gap-16",
        "max-w-[1366px]"
      )}
    >
      {BANNERS.map(
        ({ id, path, description, title, icon, backgroundColor }) => (
          <Card
            linkTo={path}
            key={id}
            style={{
              backgroundImage: `url(${ASSETS_BASE_URL}/${id}.webp)`,
              backgroundPosition: "50% 0",
              backgroundSize: "cover",
              backgroundColor,
            }}
            className={cn(
              "flex",
              "flex-col",
              "justify-between",
              "items-center"
            )}
          >
            <h3
              className={cn(
                "mt-[68px]",
                "flex",
                "flex-col",
                "justify-between",
                "items-center",
                "md:text-[4em]",
                "md:leading-[1em]",
                title === "newsroom"
                  ? cn("text-coldBlue md:w-[400px]")
                  : cn("text-yellow md:w-[320px]"),
                "font-oswald"
              )}
            >
              {description}
            </h3>
            <Image src={`${ASSETS_BASE_URL}/${icon}.svg`} {...imageProps} />
          </Card>
        )
      )}
    </section>
  );
}
