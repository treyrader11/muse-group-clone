import { CATEGORY_FILTERS, type CategoryLabel } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";

type CategoriesProps = {
  activeCategory: CategoryLabel;
  setActiveCategory: React.Dispatch<React.SetStateAction<CategoryLabel>>;
};

export default function Categories({
  activeCategory,
  setActiveCategory,
}: CategoriesProps) {
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
        {CATEGORY_FILTERS.map((category, i) => (
          <li key={i}>
            <CategoryItem
              onClick={() => setActiveCategory(category)}
              className={cn(
                "text-white",
                "text-2xl",
                activeCategory === category
                  ? "text-black bg-white"
                  : "hover:text-white/50"
              )}
              label={category}
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
        "flex",
        "gap-2",
        "items-center",
        "justify-center",
        "bg-black",
        "text-white",
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
