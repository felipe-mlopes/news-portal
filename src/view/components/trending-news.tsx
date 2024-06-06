import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { MainNews } from "./main-news";
import { ShortNews } from "./short-news";
import { getTrendingNews } from "@/models/data-fetching/get-trending-news.model";

export async function TrendingNews() {
  const response = await getTrendingNews();

  if (!response) {
    return null;
  }

  const trendingNews = response.data.articles;

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
            mainNews.map((item) => {
              return (
                <MainNews
                  key={item.id}
                  urlImage={item.urlToImage}
                  title={item.title}
                  content={item.description ?? ""}
                  slug={item.slug!}
                  h={600}
                  w={800}
                />
              );
            })}
        </div>
        <div className="flex flex-col gap-4">
          {trendingNews &&
            mostRecentNews.map((item) => {
              return (
                <MainNews
                  key={item.id}
                  urlImage={item.urlToImage}
                  title={item.title}
                  slug={item.slug!}
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
            trendNews.map((item) => {
              return (
                <ShortNews key={item.id} title={item.title} slug={item.slug!} />
              );
            })}
        </div>
      </div>
    </section>
  );
}
