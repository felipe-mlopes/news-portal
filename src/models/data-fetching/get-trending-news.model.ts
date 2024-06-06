'use server'

import { randomUUID } from 'crypto'
import slugify from 'slugify'

import { api } from '../api';
import { env } from "@/env";

import { ArticlesTypes } from '../types/articles';

interface TrendingNewsProps {
  data: {
    status: string;
    totalResults: number;
    articles: ArticlesTypes[];
  }
};

function generateIdAndSlug(article: ArticlesTypes) {
  article.id = randomUUID()
  article.slug = slugify(article.title, { lower: true })
} 

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

  data?.articles.forEach(generateIdAndSlug)

  return {
    data: {
      status: data.status,
      totalResults: data.totalResults,
      articles: data.articles
    }
  };
}