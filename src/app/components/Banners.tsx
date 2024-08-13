import React from "react";
import Card from "./Card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ASSETS_BASE_URL } from "@/lib/constants";

const imageProps = {
  alt: "Arrow icon",
  width: 64,
  height: 64,
};

const BANNERS = [
  {
    id: "6511efa10919fb9000588fef_Career",
    title: "Careers",
    path: "/careers",
    description: "Join the muse team",
    image: "banner-1.png",
    backgroundColor: "hsl(var(--lime-green))",
    icon: "6511efa00919fb9000588fba_Arrow",
  },
  {
    id: "65383b84a1a71fb9eeb76621_Newsroom",
    title: "Newsroom",
    path: "/newsroom",
    description: "Explore news and features",
    image: "banner-2.png",
    backgroundColor: "hsl(var(--purp))",
    icon: "6511efa00919fb9000588fc5_Arrow-cold-blue",
  },
];

export default function Banners() {
  return (
    <section
      className={cn(
        "grid",
        "grid-cols-1",
        "md:grid-cols-2",
        // "auto-cols-fr",
        "gap-8",
        "lg:gap-16",
        "max-w-[1366px]"
      )}
    >
      {BANNERS.map(({ id, path, description, icon, backgroundColor }, i) => (
        // <Link key={id} href={path}>
        <Card
          key={id}
          style={{
            backgroundImage: `url(${ASSETS_BASE_URL}/${id}.webp)`,
            backgroundPosition: "50% 0",
            backgroundSize: "cover",
            backgroundColor,
          }}
          className={cn(
            // "relative",
            "flex",
            "flex-col",
            "justify-between",
            "items-center"
          )}
        >
          {/* <Link
            className={cn(
              // "pt-[125%]",
              //   "relative",
              "flex",
              "flex-col",
              "justify-between",
              "items-center"
            )}
            href={path}
          > */}
          <h3
            className={cn(
              "mt-[68px]",
              "flex",
              "flex-col",
              "justify-between",
              "items-center",
              "text-yellow",
              "last:text-purple",
              // "w-[270px]",
              "block",
              "font-oswald"
            )}
          >
            {description}
          </h3>

          <div className="pt-[125%] mb-[68px]">
            <Image src={`${ASSETS_BASE_URL}/${icon}.svg`} {...imageProps} />
          </div>
          {/* </Link> */}
        </Card>
      ))}
    </section>
  );
}
