"use client";

import { useFetchTrendingNews } from "../hooks/use-fetch-trending-news";
import { CardNews } from "./card-news";

interface CategoryNewsProps {
  category: string;
}

export function CategoryNews({ category }: CategoryNewsProps) {
  const { trendingNews } = useFetchTrendingNews();

  const categoryNews = trendingNews.slice(0, 7);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold capitalize">{category}</h2>
      <div className="flex flex-wrap gap-4">
        {trendingNews &&
          categoryNews.map((item, idx) => {
            return (
              <CardNews
                key={idx}
                urlImage={item.urlToImage}
                title={item.title}
              />
            );
          })}
      </div>
    </section>
  );
}
