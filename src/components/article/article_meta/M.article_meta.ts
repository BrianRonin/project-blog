import { articleMetaProps } from './article_meta'

export const mock_article_meta = {
  createdAt: '2022-10-05T02:48:15.628Z',
  author: {
    slug: 'brian',
    name: 'BrianRonin',
  },
  tags: [
    {
      name: '#React',
      slug: 'react',
    },
    {
      name: '#JavaScript',
      slug: 'java-script',
    },
  ],
  category: {
    name: 'Docker',
    slug: 'docker',
  },
} as articleMetaProps
