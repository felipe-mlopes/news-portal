import { CategoryNews } from "@/view/components/category-news";
import { TrendingNews } from "@/view/components/trending-news";

export default function Home() {
  return (
    <div className="h-screen space-y-10">
      <header className="text-center">
        <h1 className="text-4xl">Portal News</h1>
      </header>
      <main>
        <TrendingNews />
        <div className="space-y-8">
          <CategoryNews category="política" />
          <CategoryNews category="economia" />
          <CategoryNews category="esportes" />
        </div>
      </main>
    </div>
  );
}
