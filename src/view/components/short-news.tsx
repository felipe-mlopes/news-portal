import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function ShortNews({ title, publishedAt, slug }: NewsProps) {
  const dateNews = dayjs(publishedAt, { utc: true });
  const dateNewsFormat = dateNews.locale("pt-br").format("HH[h]mm");

  return (
    <div className="lg:max-w-80">
      <Link href={`/news/${slug}`}>
        <span className="cursor-pointer hover:underline">{title}</span>
      </Link>{" "}
      -{" "}
      <span className="text-sm text-gray-500 font-medium">
        {dateNewsFormat}
      </span>
    </div>
  );
}
