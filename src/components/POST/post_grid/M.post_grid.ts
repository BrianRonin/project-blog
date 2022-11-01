import { postGridProps } from '../post_grid/post_grid'
const mock_article_header = {
  title: 'titulo qualquer',
  excerpt:
    'uma descrição que vou criando enquanto penso na descrição',
  coverWithMetaProps: {
    coverWithMeta: {
      url: 'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg',
      altText: 'um alt image',
    },
    articleMetaProps: {
      category: {
        name: 'Tecnologia',
        slug: 'tecnologia',
      },
      createdAt: '2022-10-05T02:48:15.628Z',
      tags: [
        {
          name: 'React',
          slug: 'react',
        },
        {
          name: 'Docker',
          slug: 'docker',
        },
      ],
      author: {
        name: 'Brian',
        slug: 'brian',
      },
    },
  },
}

export const mock_post_grid = {
  posts: [
    {
      slug: 'slug 1',
      ...mock_article_header,
    },
    {
      slug: 'slug 2',
      ...mock_article_header,
    },
    {
      slug: 'slug 3',
      ...mock_article_header,
    },
    {
      slug: 'slug 4',
      ...mock_article_header,
    },
    {
      slug: 'slug 5',
      ...mock_article_header,
    },
  ],
} as postGridProps
