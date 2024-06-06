import Image from "next/image";
import Link from "next/link";

export function CardNews({ urlImage, title }: NewsProps) {
  const imageUrl = urlImage ?? "";

  return (
    <Link href="#" className="max-w-60">
      <Image
        src={imageUrl}
        alt="Imagem da notícia"
        height={200}
        width={240}
        className="rounded"
      />
      <strong className="text-xs hover:underline">{title}</strong>
    </Link>
  );
}
