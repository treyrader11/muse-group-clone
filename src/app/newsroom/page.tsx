"use client";

import { cn } from "@/lib/utils";
import Hero from "../components/newsroom/Hero";
import News from "../components/newsroom/News";
import { useState } from "react";
import {
  CATEGORY_FILTERS,
  type CategoryLabel,
  NEWS_DATA,
} from "@/lib/constants";
import Categories from "../components/newsroom/Categories";

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>(
    CATEGORY_FILTERS[0]
  );
  const [filteredNews, setFilteredNews] = useState(NEWS_DATA);

  console.log('filteredNews', filteredNews)
  return (
    <div className={cn("min-h-screen", "bg-purple", "pt-40", "w-full")}>
      <Hero>
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </Hero>
      {filteredNews.length && <News data={filteredNews} />}
    </div>
  );
}
