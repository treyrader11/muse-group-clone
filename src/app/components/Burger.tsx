import { cn } from "@/lib/utils";
import React from "react";

export default function BurgerNew({
  isActive,
  onClick,
  className,
}: {
  isActive: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <button
        onClick={onClick}
        className={cn(
          "transition-all",
          "duration-500",
          "w-10",
          "h-[1.5rem]",
          "relative",
          "rotate-0",
          "m-5",
          "delay-300", // delays rotation (make same as overlay fall)
          isActive && cn("rotate-[135deg]", "duration-200", "")
        )}
      >
        <span
          className={cn(
            "absolute",
            "top-0",
            "left-0",
            "h-[.21rem]",
            "w-full",
            "bg-black",
            "duration-300",
            "transition-[top,transform]",
            isActive &&
              cn(
                "top-1/2",
                "mt-[-3px]",
                "delay-600",
                "rotate-[90deg]"

                // "animate-shrink-rotate"
              )
          )}
        />

        <span
          className={cn(
            "absolute",
            "top-auto",
            "bottom-0",
            "left-0",
            "h-[.21rem]",
            "w-full",
            "bg-black",
            "duration-300",
            "transition-[bottom]",
            isActive &&
              cn(
                "bottom-1/2",
                "rotate-0",
                // "animate-shrink-rotate-reverse"
              )
          )}
        />
      </button>
    </div>
  );
}
