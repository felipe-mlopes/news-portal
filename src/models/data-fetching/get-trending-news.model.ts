import { env } from "@/env";

import { api } from '../api';
import { generateIdAndSlug } from '../generate-id-and-slug';

import { TrendingNewsTypes } from '../types/trending-news';


export async function getTrendingNews(): Promise<TrendingNewsTypes | null> {
  const response = await api(
    '/v2/top-headlines?sources=bbc-news',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${env.API_KEY}`,
      },
      next: {
        revalidate: 3 * 60 * 1000 // 3 minutes
      },
    },
  );

  if (!response.ok) {
    return null
  }

  const data = await response.json();

  data?.articles.forEach(generateIdAndSlug)

  return {
    data: {
      status: data.status,
      totalResults: data.totalResults,
      articles: data.articles
    }
  };
}