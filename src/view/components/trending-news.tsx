"use client";

import { useFetchTrendingNews } from "../hooks/use-fetch-trending-news";
import { CardNews } from "./card-news";

export function TrendingNews() {
  const { trendingNews } = useFetchTrendingNews();

  const mostRecentNews = trendingNews.slice(0, 3);

  return (
    <section>
      <div>
        {trendingNews &&
          mostRecentNews.map((item, idx) => {
            return (
              <CardNews
                key={idx}
                urlImage={item.urlToImage}
                title={item.title}
                content={item.description ?? ""}
              />
            );
          })}
      </div>
    </section>
  );
}
