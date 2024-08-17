import { cn } from "@/lib/utils";
import React from "react";
import { ASSETS_BASE_URL, type NewsItem } from "@/lib/constants";
import Image from "next/image";
import Card from "../../components/Card";

export default function News({ data }: { data: NewsItem[] }) {
  return (
    <section className="px-10">
      <ul
        className={cn(
          "grid",
          "md:grid-cols-2",
          "gap-4",
          "md:gap-8",
          "lg:gap-[4rem]"
        )}
      >
        {data.map((item, i) => (
          <li key={i}>
            <NewsItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function NewsItem({ image, title, path, category, date }: NewsItem) {
  return (
    <Card
      className={cn(
        "gap-4",
        "px-0",
        "pb-16",
        "text-left",
        "group",
        "hover:opacity-90",
        "hover:cursor-pointer"
      )}
    >
      <CoverImage imageSrc={image} />
      <h5
        className={cn(
          "text-3xl",
          "xs:text-4xl",
          "leading-8",
          "xs:leading-9",
          "font-semibold",
          "uppercase",
          "font-oswald",
          "tracking-tighter",
          "group-hover:opacity-70"
        )}
      >
        {title}
      </h5>
      <p className="text-2xl">{date}</p>
    </Card>
  );
}

function CoverImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div
      className={cn(
        "h-[250px]",
        "h-[300px]",
        "w-full",
        "relative",
        "max-w-full"
      )}
    >
      <Image
        fill
        src={`/news/${imageSrc}`}
        alt={"News Item"}
        className={cn("object-cover rounded-2xl md:rounded-2xl")}
      />
    </div>
  );
}
