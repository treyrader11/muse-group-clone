import { cn } from "@/lib/utils";
import React from "react";

export default function Title({ text }: { text: string }) {
  return <h1 className={cn("title-mask")}>{text}</h1>;
}
