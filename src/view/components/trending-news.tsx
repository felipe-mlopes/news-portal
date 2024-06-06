"use client";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { useFetchTrendingNews } from "../hooks/use-fetch-trending-news";
import { MainNews } from "./main-news";
import { ShortNews } from "./short-news";

export function TrendingNews() {
  const { trendingNews } = useFetchTrendingNews();

  const mainNews = trendingNews.slice(0, 1);
  const mostRecentNews = trendingNews.slice(1, 3);
  const trendNews = trendingNews.slice(3, 10);

  const today = dayjs(new Date(), { utc: true });
  const todayFormat = today.locale("pt-br").format("DD/MMMM");

  return (
    <section className="flex justify-between">
      <div className="flex justify-center items-start gap-8">
        <div>
          {trendingNews &&
            mainNews.map((item, idx) => {
              return (
                <MainNews
                  key={idx}
                  urlImage={item.urlToImage}
                  title={item.title}
                  content={item.description ?? ""}
                  h={600}
                  w={800}
                />
              );
            })}
        </div>
        <div className="flex flex-col gap-4">
          {trendingNews &&
            mostRecentNews.map((item, idx) => {
              return (
                <MainNews
                  key={idx}
                  urlImage={item.urlToImage}
                  title={item.title}
                  h={200}
                  w={400}
                />
              );
            })}
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="font-bold text-center">
          Destaques do Dia - {todayFormat}
        </h2>
        <div className="space-y-4">
          {trendingNews &&
            trendNews.map((item, idx) => {
              return <ShortNews key={idx} title={item.title} />;
            })}
        </div>
      </div>
    </section>
  );
}
