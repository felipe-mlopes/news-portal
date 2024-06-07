import Image from "next/image";
import Link from "next/link";

interface MainNewsProps extends NewsProps {
  h: number;
  w: number;
  isFeaturedNews?: boolean;
}

export function MainNews({
  urlImage,
  title,
  description,
  slug,
  h,
  w,
  isFeaturedNews = true,
}: MainNewsProps) {
  const imageUrl = urlImage ?? "";

  return (
    <Link
      href={`/news/${slug}`}
      className={`space-y-4 ${!isFeaturedNews && "max-w-[400px]"}`}
    >
      <Image
        src={imageUrl}
        alt="Image da notícia"
        height={h}
        width={w}
        className="rounded"
      />
      <div className="space-y-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="hidden sm:block">{description}</p>
      </div>
    </Link>
  );
}
