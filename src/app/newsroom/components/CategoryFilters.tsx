import { CATEGORY_FILTERS, type CategoryLabel } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";

type CategoriesProps = {
  activeCategory: CategoryLabel;
  setActiveCategory: React.Dispatch<React.SetStateAction<CategoryLabel>>;
};

export default function CategoryFilters({
  activeCategory,
  setActiveCategory,
}: CategoriesProps) {
  return (
    <ul
      className={cn(
        "gap-2",
        "flex-wrap",
        "justify-center",
        "items-enter",
        "flex"
      )}
    >
      {CATEGORY_FILTERS.map((category, i) => (
        <li key={i}>
          <Category
            onClick={() => setActiveCategory(category)}
            className={cn(
              "text-white",
              "text-2xl",
              activeCategory === category
                ? "text-black bg-white"
                : "hover:text-white/50"
            )}
          >
            {category}
          </Category>
        </li>
      ))}
    </ul>
  );
}

type CategoryItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
};

function Category({ className, onClick, children }: CategoryItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative",
        "leading-[150%]",
        "bg-black",
        "text-white",
        "rounded-full",
        "py-3.5",
        "px-8",
        "sm:py-4",
        "sm:px-9",
        "text-2xl",
        className
      )}
    >
      {children}
    </button>
  );
}
