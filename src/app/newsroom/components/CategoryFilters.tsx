import {
  CATEGORY_FILTERS,
  type CategoryLabel,
  BLOG_DATA,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";

type CategoriesProps = {
  activeCategory: CategoryLabel;
  categories: CategoryLabel[];
  setActiveCategory: React.Dispatch<React.SetStateAction<CategoryLabel>>;
};

export default function CategoryFilters({
  activeCategory,
  categories,
  setActiveCategory,
}: CategoriesProps) {
  return (
    <ul
      key={categories.length}
      className={cn(
        "gap-2",
        "flex-wrap",
        "justify-center",
        "items-enter",
        "flex"
      )}
    >
      {categories.map((category, i) => (
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
        "xs:py-3.5",
        "xs:px-8",
        "py-1.5",
        "px-3",
        "sm:py-4",
        "sm:px-9",
        "text-sm",
        "sm:text-2xl",
        className
      )}
    >
      {children}
    </button>
  );
}
