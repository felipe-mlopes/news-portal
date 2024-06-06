import { TrendingNews } from "@/view/components/trending-news";

export default function Home() {
  return (
    <main className="h-screen">
      <h1>Portal News</h1>
      <div className="w-full">
        <h2>Principais notícias</h2>
        <TrendingNews />
      </div>
    </main>
  );
}
