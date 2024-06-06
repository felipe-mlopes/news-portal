import Image from "next/image";

interface CardNewsProps {
  urlImage: string | null;
  title: string;
  content: string;
  author?: string;
  publishedAt?: string;
}

export function CardNews({ urlImage, title, content }: CardNewsProps) {
  const imageUrl = urlImage ?? "";

  return (
    <div>
      <Image src={imageUrl} alt="Imagem da notícia" height={200} width={200} />
      <div>
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
