import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function ShortNews({ title, publishedAt, slug }: NewsProps) {
  const dateNews = dayjs(publishedAt, { utc: true });
  const dateNewsFormat = dateNews.locale("pt-br").format("HH:mm");

  return (
    <div className="max-w-80">
      <Link href={`/news/${slug}`}>
        <span className="cursor-pointer hover:underline">{title}</span>
      </Link>{" "}
      - {dateNewsFormat}
    </div>
  );
}
