import { mock_header } from '../../header/M.header'
import { mock_cover } from '../cover/M.cover'
import { articleHeaderProps } from './article_header'

export const mock_article_header = {
  title: 'titulo qualquer',
  excerpt: 'uma descrição que vou criando enquanto penso na descrição',
  coverProps: {
    cover: {
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
} as articleHeaderProps
