import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 p-8 bg-gray-50 text-center align-middle">
      <Link href={"/"}>
        <h1 className="text-2xl">News Portal</h1>
      </Link>
    </header>
  );
}
