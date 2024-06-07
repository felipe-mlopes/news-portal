import { env } from "@/env";

import { api } from "../api";
import { TrendingNewsTypes } from "../types/trending-news";

import { generateIdAndSlug } from "../generate-id-and-slug";

export async function getNewsByCategory(
    category: string,
    dateFrom: string,
    dateTo: string,
  ): Promise<TrendingNewsTypes | null> {
    const response = await api(
      `/v2/everything?domains=bbc.co.uk&q=${category}&from=${dateFrom}&to=${dateTo}&sortBy=popularity`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${env.API_KEY}`,
        },
        next: {
          revalidate: 3 * 60 * 1000 // 3 minutes
        },
      },
    );
  
    if (!response.ok) {
      return null;
    }
  
    const data = await response.json();

    data?.articles.forEach(generateIdAndSlug)
  
    return {
      data: {
        status: data.status,
        totalResults: data.totalResults,
        articles: data.articles,
      },
    };
  }