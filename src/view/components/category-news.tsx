import { getTrendingNews } from "@/models/data-fetching/get-trending-news.model";
import { CardNews } from "./card-news";

interface CategoryNewsProps {
  category: string;
}

export async function CategoryNews({ category }: CategoryNewsProps) {
  const response = await getTrendingNews();

  if (!response) {
    return null;
  }

  const trendingNews = response.data.articles;
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
                slug={item.slug!}
              />
            );
          })}
      </div>
    </section>
  );
}
