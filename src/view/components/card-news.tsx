import Image from "next/image";
import Link from "next/link";

interface CardNewsProps extends NewsProps {
  category: string;
}

export function CardNews({ category, slug, title, urlImage }: CardNewsProps) {
  const imageUrl = urlImage ?? "";

  return (
    <Link
      href={`/news/category/${category}/${slug}`}
      className="flex md:flex-col gap-4 md:max-w-60"
    >
      <Image
        src={imageUrl}
        alt="Imagem da notícia"
        height={200}
        width={240}
        className="rounded w-36 h-24 sm:w-auto sm:h-auto"
      />
      <strong className="text-base hover:underline">{title}</strong>
    </Link>
  );
}
