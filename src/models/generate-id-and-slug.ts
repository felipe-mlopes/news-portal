import { randomUUID } from "crypto"
import slugify from "slugify"

import { ArticlesTypes } from "./types/articles"

export function generateIdAndSlug(article: ArticlesTypes) {
    article.id = randomUUID()
    article.slug = slugify(article.title, { lower: true })
  } 