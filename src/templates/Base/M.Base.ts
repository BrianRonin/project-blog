import { markdown } from '../../components/markdown/mock'
import { DefaultMarkdown } from '../../components/markdown/templates/default_markdown/default_markdown'
import { baseProps_template } from './Base'

export const mock_base_template = {
  settings: {
    blog_description:
      'sou uma descrição lorem ipsum descrção',
    blog_name: 'titulo',
    footer: 'sou um footer',
    logo: {
      url: 'assets/images/piramide.png',
      altText: 'alt text',
    },
    menu_link: [
      {
        link: '/home/1',
        newTab: false,
        text: 'My jobs',
      },
      {
        link: '/home/2',
        newTab: false,
        text: 'About me',
      },
      {
        link: '/home/3',
        newTab: false,
        text: 'Services',
      },
    ],
  },
  children: DefaultMarkdown({
    children: 'ok',
  }),
} as baseProps_template
