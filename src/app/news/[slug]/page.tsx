import { getTrendingNews } from "@/models/data-fetching/get-trending-news.model";
import { NewsDetails } from "@/view/components/news-details";

export default async function New({ params }: { params: { slug: string } }) {
  const response = await getTrendingNews();

  if (!response) {
    return null;
  }

  const trendingNews = response.data.articles;
  const details = trendingNews.filter((item) => item.slug === params.slug);

  return (
    <>
      <header>Oi</header>
      <NewsDetails
        key={details[0].id}
        slug={details[0].slug!}
        title={details[0].title}
        author={details[0].author}
        content={details[0].content!}
        urlImage={details[0].urlToImage!}
        publishedAt={details[0].publishedAt}
      />
      ;
    </>
  );
}
