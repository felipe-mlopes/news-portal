export interface TrendingNewsTypes {
    data: {
      status: string;
      totalResults: number;
      articles: ArticlesTypes[];
    }
  };