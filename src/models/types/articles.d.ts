export interface ArticlesTypes {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
    id?: string
    slug?: string
  }