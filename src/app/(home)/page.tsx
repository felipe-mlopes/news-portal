import { Metadata } from "next";

import { Header } from "@/view/components/header";
import { TrendingNews } from "@/view/components/trending-news";
import { CategoryNews } from "@/view/components/category-news";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex flex-col space-y-16 lg:block">
        <TrendingNews />
        <div className="space-y-8">
          <CategoryNews category="business" />
          <CategoryNews category="economy" />
          <CategoryNews category="sports" />
        </div>
      </main>
    </div>
  );
}
