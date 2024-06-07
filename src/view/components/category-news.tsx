import { getNewsByCategory } from "@/models/data-fetching/get-news-by-category.model";

import { generateDateFormated } from "../utils/generate-date-formated";

import { CardNews } from "./card-news";

interface CategoryNewsProps {
  category: string;
}

export async function CategoryNews({ category }: CategoryNewsProps) {
  const { dateFrom, dateTo } = generateDateFormated();

  const response = await getNewsByCategory(category, dateFrom, dateTo);

  if (!response) {
    return null;
  }

  const news = response.data.articles;
  const categoryNews = news.slice(0, 6);

  return (
    <section className="px-8 md:px-16 lg:px-32 ">
      <h2 className="text-2xl font-bold uppercase">{category}</h2>
      <div className="flex flex-wrap gap-4 py-8 md:justify-center lg:justify-normal border-b-[1px] border-gray-200">
        {news &&
          categoryNews.map((item, idx) => {
            return (
              <CardNews
                key={idx}
                urlImage={item.urlToImage}
                title={item.title}
                category={category}
                slug={item.slug!}
                author={item.author}
                content={item.content ?? ""}
                description={item.description ?? ""}
                publishedAt={item.publishedAt}
              />
            );
          })}
      </div>
    </section>
  );
}
