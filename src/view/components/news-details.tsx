import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function NewsDetails({
  title,
  author,
  content,
  urlImage,
  publishedAt,
}: NewsProps) {
  const imageUrl = urlImage ?? "";

  const dateNews = dayjs(publishedAt, { utc: true });
  const dateNewsFormat = dateNews.locale("pt-br").format("DD/MM/YYYY");

  return (
    <main className="flex flex-col items-center w-full">
      <Image
        src={imageUrl}
        alt="Imagem da notícia"
        layout="responsive"
        width={1024}
        height={576}
        className="rounded"
      />
      <div className="flex flex-col gap-3">
        <strong>{title}</strong>
        <div className="flex justify-between">
          <span>Fonte: {author}</span>
          <span>Postado em: {dateNewsFormat}</span>
        </div>
        <p>{content}</p>
      </div>
    </main>
  );
}
