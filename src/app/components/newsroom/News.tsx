import { cn } from "@/lib/utils";
import React from "react";
import { ASSETS_BASE_URL, type NewsItem } from "@/lib/constants";
import Image from "next/image";
import Card from "../Card";

export default function News({ data }: { data: NewsItem[] }) {
  return (
    <section className="bg-white">
      <ul className={cn("grid", "sm:grid-cols-2", "gap-4", "")}>
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
        "min-h-[648px]",
        "p-0",
        "pb-16",
        "text-left"
      )}
    >
      <div className={cn("h-[250px]", "w-full", "", "relative")}>
        <Image
          fill
          // src={`/public/news/${image}`}
          // src={`/public/${image}`}
          src={image}
          alt={"News Item"}
          className={cn("object-cover rounded-2xl")}
        />
      </div>
      <h5
        className={cn(
          "text-4xl",
          "leading-[36px]",
          "font-semibold",
          "uppercase",
          "font-oswald",
          "tracking-tighter"
        )}
      >
        {title}
      </h5>
      <p className="text-2xl">{date}</p>
    </Card>
  );
}
