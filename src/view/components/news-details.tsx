import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function NewsDetails({
  title,
  author,
  content,
  description,
  urlImage,
  publishedAt,
}: NewsProps) {
  const imageUrl = urlImage ?? "";

  const dateNews = dayjs(publishedAt, { utc: true });
  const dateNewsFormat = dateNews.locale("pt-br").format("DD/MM/YYYY");

  return (
    <main className="flex flex-col gap-4 md:pt-8 px-8 md:px-16 lg:px-32 xl:px-64 w-full">
      <h2 className="text-2xl md:text-[2rem] lg:text-4xl font-semibold">
        {title}
      </h2>
      <p className="text-sm lg:text-lg">{description}</p>
      <Image
        src={imageUrl}
        alt="Imagem da notícia"
        width={1024}
        height={576}
        className="rounded"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="text-sm lg:text-base font-bold">{author}</span>
          <span className="text-xs lg:text-sm">{dateNewsFormat}</span>
        </div>
        <p>{content}</p>
      </div>
    </main>
  );
}
