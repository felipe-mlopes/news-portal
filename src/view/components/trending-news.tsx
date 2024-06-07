import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { getTrendingNews } from "@/models/data-fetching/get-trending-news.model";

import { MainNews } from "./main-news";
import { ShortNews } from "./short-news";

export async function TrendingNews() {
  const response = await getTrendingNews();

  if (!response) {
    return null;
  }

  const trendingNews = response.data.articles;

  const mainNews = trendingNews.slice(0, 1);
  const mostRecentNews = trendingNews.slice(1, 3);
  const trendNews = trendingNews.slice(3, 8);

  const today = dayjs(new Date(), { utc: true });
  const todayFormat = today.locale("en").format("DD/MM/YYYY");

  return (
    <section className="flex flex-col gap-12 px-8 sm:px-16 lg:flex-row lg:gap-8 lg:px-32 xl:gap-64">
      <div className="flex flex-col lg:justify-center lg:items-start gap-12">
        <div>
          {trendingNews &&
            mainNews.map((item) => {
              return (
                <MainNews
                  key={item.id}
                  urlImage={item.urlToImage}
                  title={item.title}
                  content={item.content ?? ""}
                  description={item.description ?? ""}
                  author={item.author}
                  publishedAt={item.publishedAt}
                  slug={item.slug!}
                  h={600}
                  w={800}
                />
              );
            })}
        </div>
        <div className="flex gap-8">
          {trendingNews &&
            mostRecentNews.map((item) => {
              return (
                <MainNews
                  key={item.id}
                  urlImage={item.urlToImage}
                  title={item.title}
                  content={item.content ?? ""}
                  description={item.description ?? ""}
                  author={item.author}
                  publishedAt={item.publishedAt}
                  slug={item.slug!}
                  isFeaturedNews={false}
                  h={200}
                  w={400}
                />
              );
            })}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">Trending News - {todayFormat}</h2>
        <div className="space-y-4">
          {trendingNews &&
            trendNews.map((item) => {
              return (
                <ShortNews
                  key={item.id}
                  urlImage={item.urlToImage}
                  title={item.title}
                  content={item.content ?? ""}
                  description={item.description ?? ""}
                  author={item.author}
                  publishedAt={item.publishedAt}
                  slug={item.slug!}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
