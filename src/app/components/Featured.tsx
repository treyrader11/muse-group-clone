import { cn } from "@/lib/utils";
import React from "react";
import Title from "./Title";

export default function Featured() {
  return (
    <section
      className={cn(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "pt-[256px]",
        "px-[4%]",
        "font-oswald",
        "w-full"
      )}
    >
      <h1
        className={cn(
          "flex",
          "items-center",

          // "text-center",
          "overflow-hidden",
          "bg-clip-text",
          "[background-image:linear-gradient(346deg,black_68%,#fa6d3e_87%)]",
          "[-webkit-text-fill-color:transparent]"
          //  "title-mask"
        )}
      >
        What Muse <br />
        creates
        <br />
      </h1>

      <h3
        className={cn(
          "xs:px-16",

          "text-center",
          "items-center",
          "flex"

          //  "title-mask"
        )}
      >
        For&nbsp;OUR&nbsp;400M+ USERS
      </h3>
    </section>
  );
}
