'use client'

import { useCallback, useEffect, useState } from "react";

import { ArticlesTypes } from "@/models/types/articles";
import { getTrendingNews } from "@/models/get-trending-news.model";

export function useFetchTrendingNews() {
  const [trendingNews, setTrendingNews] = useState<ArticlesTypes[]>([]);

  const handleFetchTrendingNews = useCallback(async () => {
    const response = await getTrendingNews();

    if (response?.data) {
      setTrendingNews(response?.data.articles);
    }
  }, []);

  useEffect(() => {
    handleFetchTrendingNews();
  }, [handleFetchTrendingNews]);


  return {
    trendingNews
  }
}