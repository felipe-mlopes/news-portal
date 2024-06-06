import Image from "next/image";
import Link from "next/link";

interface MainNewsProps extends NewsProps {
  h: number;
  w: number;
}

export function MainNews({ urlImage, title, content, h, w }: MainNewsProps) {
  const imageUrl = urlImage ?? "";

  return (
    <Link href="#">
      <Image src={imageUrl} alt="" height={h} width={w} className="rounded" />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Link>
  );
}
