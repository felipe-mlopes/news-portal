import { Header } from "@/view/components/header";
import { TrendingNews } from "@/view/components/trending-news";
import { CategoryNews } from "@/view/components/category-news";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex flex-col lg:block">
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
