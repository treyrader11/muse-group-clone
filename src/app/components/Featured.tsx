import { cn } from "@/lib/utils";
import React from "react";

export default function Featured() {
  return (
    <section
      className={cn(
        "flex-center",
        "flex-col",
        "pt-[256px]",
        // "px-[4%]",
        "font-oswald",
        "w-full"
      )}
    >
      <h1 className="title-mask">
        What Muse <br />
        creates
        <br />
      </h1>

      <h3 className="xs:px-16">For&nbsp;OUR&nbsp;400M+ USERS</h3>
    </section>
  );
}
