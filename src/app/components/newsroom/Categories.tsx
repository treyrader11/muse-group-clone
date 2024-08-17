"use client";

import { CATEGORY_FILTERS, type CategoryLabel } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>(
    CATEGORY_FILTERS[0].label
  );

  return (
    <div>
      <ul
        className={cn(
          "gap-2",
          "flex-wrap",
          "justify-center",
          "items-enter",
          "flex"
        )}
      >
        {CATEGORY_FILTERS.map(({ label }) => (
          <li key={label}>
            <CategoryItem
              onClick={() => setActiveCategory(label)}
              className={cn(
                "text-white",
                "text-2xl",
                activeCategory === label
                  ? "text-black bg-white"
                  : "hover:text-white/50"
              )}
              label={label}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

type CategoryItemProps = {
  className?: string;
  label: string;
  onClick: () => void;
};

function CategoryItem({ className, label, onClick }: CategoryItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "leading-[150%]",
        "flex gap-2",
        "items-center",
        "justify-center",
        "bg-black",
        "text-white",
        // "hover:text-white/50",
        "rounded-full",
        "py-3.5",
        "px-8",
        "sm:py-4",
        "sm:px-9",
        "text-2xl",
        "relative",
        className
      )}
    >
      {label}
    </button>
  );
}
