"use client";

import { cn } from "@/lib/utils";
import Hero from "./components/Hero";
import NewsBlogs from "./components/NewsBlogs";
import { useState, useEffect } from "react";
import {
  CATEGORY_FILTERS,
  type CategoryLabel,
  BLOG_DATA,
} from "@/lib/constants";
import CategoryFilters from "./components/CategoryFilters";

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>(
    CATEGORY_FILTERS[0]
  );
  const [filteredData, setFilteredData] = useState(BLOG_DATA);

  useEffect(() => {
    if (activeCategory === "All") setFilteredData(BLOG_DATA);
    else {
      setFilteredData(
        BLOG_DATA.filter((post) => post.category === activeCategory)
      );
    }
  }, [activeCategory]);
  return (
    <div className={cn("")}>
      <Hero>
        <CategoryFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </Hero>
      {filteredData.length > 0 && <NewsBlogs data={filteredData} />}
    </div>
  );
}
