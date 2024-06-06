import Image from "next/image";
import Link from "next/link";

interface MainNewsProps extends NewsProps {
  h: number;
  w: number;
}

export function MainNews({
  urlImage,
  title,
  description,
  slug,
  h,
  w,
}: MainNewsProps) {
  const imageUrl = urlImage ?? "";

  return (
    <Link href={`/news/${slug}`}>
      <Image src={imageUrl} alt="" height={h} width={w} className="rounded" />
      <div>
        <h3>{title}</h3>
        <p className="hidden md:block">{description}</p>
      </div>
    </Link>
  );
}
