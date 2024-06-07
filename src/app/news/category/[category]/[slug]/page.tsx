import Link from "next/link";

import { Header } from "@/view/components/header";
import { NewsDetails } from "@/view/components/news-details";
import { ArrowIcon } from "@/view/icons/arrow-icon";
import { getNewsByCategory } from "@/models/data-fetching/get-news-by-category.model";
import { generateDateFormated } from "@/view/utils/generate-date-formated";

export default async function NewCategory({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { dateFrom, dateTo } = generateDateFormated();

  const response = await getNewsByCategory(params.category, dateFrom, dateTo);

  if (!response) {
    return null;
  }

  const trendingNews = response.data.articles;
  const details = trendingNews.filter((item) => item.slug === params.slug);

  return (
    <div>
      <Header />
      <NewsDetails
        key={details[0].id}
        slug={details[0].slug ?? ""}
        title={details[0].title}
        author={details[0].author}
        content={details[0].content ?? ""}
        description={details[0].description ?? ""}
        urlImage={details[0].urlToImage ?? ""}
        publishedAt={details[0].publishedAt}
      />
      <footer className="flex justify-between items-center w-full py-12 px-8 md:px-16 lg:px-32 xl:px-64 lg:justify-start lg:gap-16">
        <Link href={"/"}>
          <ArrowIcon />
        </Link>
        <Link href={"/"} className="hover:underline">
          Back to initial page
        </Link>
      </footer>
    </div>
  );
}
