// "use client";

// import { cn, sortByDate } from "@/lib/utils";
// import Hero from "./components/Hero";
// import NewsBlogs from "./components/NewsBlogs";
// import { useState, useEffect } from "react";
// import {
//   CATEGORY_FILTERS,
//   type CategoryLabel,
//   BLOG_DATA,
//   type BlogPost,
// } from "@/lib/constants";
// import CategoryFilters from "./components/CategoryFilters";
// import LoadMore from "./components/LoadMore";

// export default function NewsroomPage() {
//   const [activeCategory, setActiveCategory] = useState<CategoryLabel>(
//     CATEGORY_FILTERS[0]
//   );
//   const [filteredData, setFilteredData] = useState<BlogPost[]>([]);
//   const [itemsToShow, setItemsToShow] = useState(10);

//   // Filter out categories that don't have any posts
//   const availableCategories = CATEGORY_FILTERS.filter((category) =>
//     BLOG_DATA.some((blog) => blog.category === category || category === "All")
//   );

//   useEffect(() => {
//     let data = BLOG_DATA;

//     if (activeCategory !== "All")
//       data = BLOG_DATA.filter((post) => post.category === activeCategory);

//     // Sort the filtered data and then slice to get the number of items to show
//     const sortedData = sortByDate(data);
//     setFilteredData(sortedData.slice(0, itemsToShow));
//   }, [activeCategory, itemsToShow]);

//   const loadMore = () => setItemsToShow((prevCount) => prevCount + 10);

//   return (
//     <main>
//       <Hero>
//         <CategoryFilters
//           activeCategory={activeCategory}
//           setActiveCategory={(category) => {
//             setActiveCategory(category);
//             setItemsToShow(10); // Reset to the first 10 items when category changes
//           }}
//           categories={availableCategories}
//         />
//       </Hero>
//       {filteredData.length > 0 && <NewsBlogs data={filteredData} />}
//       {filteredData.length <
//         BLOG_DATA.filter(
//           (post) => activeCategory === "All" || post.category === activeCategory
//         ).length && <LoadMore onClick={loadMore} />}
//     </main>
//   );
// }

"use client";

import { cn, sortByDate } from "@/lib/utils";
import Hero from "../components/Hero";
import NewsBlogs from "./components/NewsBlogs";
import { useState, useEffect } from "react";
import {
  CATEGORY_FILTERS,
  type CategoryLabel,
  BLOG_DATA,
  type BlogPost,
} from "@/lib/constants";
import CategoryFilters from "./components/CategoryFilters";
import Button from "../components/Button";

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>(
    CATEGORY_FILTERS[0]
  );
  const [filteredData, setFilteredData] = useState<BlogPost[]>([]);
  const [itemsToShow, setItemsToShow] = useState(10);

  // Filter out categories that don't have any posts
  const availableCategories = CATEGORY_FILTERS.filter((category) =>
    BLOG_DATA.some((blog) => blog.category === category || category === "All")
  );

  useEffect(() => {
    let data = BLOG_DATA;

    if (activeCategory !== "All")
      data = BLOG_DATA.filter((post) => post.category === activeCategory);

    // Sort the filtered data and then slice to get the number of items to show
    const sortedData = sortByDate(data);
    setFilteredData(sortedData.slice(0, itemsToShow));
  }, [activeCategory, itemsToShow]);

  const loadMore = () => setItemsToShow((prevCount) => prevCount + 10);
  return (
    <main>
      <Hero
        backgroundColor="purple"
        headlineText="Explore news and features"
        backgroundImageUrl="6543dd67343fe98e99e261b3_noise.png"
      >
        <CategoryFilters
          activeCategory={activeCategory}
          setActiveCategory={(category) => {
            setActiveCategory(category);
            setItemsToShow(10); // Reset to the first 10 items when category changes
          }}
          categories={availableCategories}
        />
      </Hero>
      {filteredData.length > 0 && ( // add key to force re-render: broken
        <NewsBlogs key={activeCategory} data={filteredData} />
      )}
      {filteredData.length <
        BLOG_DATA.filter(
          (post) => activeCategory === "All" || post.category === activeCategory
        ).length && (
        <section>
          <Button onClick={loadMore}>Load More</Button>
        </section>
      )}
    </main>
  );
}
