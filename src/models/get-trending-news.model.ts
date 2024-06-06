'use server'

import { env } from "@/env";
import { ArticlesTypes } from "./types/articles";
import { api } from "./api";

interface TrendingNewsProps {
  data: {
    status: string;
    totalResults: number;
    articles: ArticlesTypes[];
  }
};

export async function getTrendingNews(): Promise<TrendingNewsProps | null> {
  const response = await api(
    '/v2/top-headlines?sources=bbc-news',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${env.API_KEY}`,
      },
    },
  );

  if (!response.ok) {
    return null
  }

  const data = await response.json();

  return {
    data: {
      status: data.status,
      totalResults: data.totalResults,
      articles: data.articles
    }
  };
}