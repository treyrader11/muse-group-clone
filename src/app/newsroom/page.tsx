"use client";

import { cn } from "@/lib/utils";
import Hero from "./components/Hero";
import News from "./components/News";
import { useState } from "react";
import {
  CATEGORY_FILTERS,
  type CategoryLabel,
  NEWS_DATA,
} from "@/lib/constants";
import CategoryFilters from "./components/CategoryFilters";

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>(
    CATEGORY_FILTERS[0]
  );
  const [filteredData, setFilteredData] = useState(NEWS_DATA);

  console.log("filteredNews", filteredData);
  return (
    <div className={cn("")}>
      <Hero>
        <CategoryFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </Hero>
      {filteredData.length && <News data={filteredData} />}
    </div>
  );
}
