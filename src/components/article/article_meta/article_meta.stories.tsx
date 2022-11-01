import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  ArticleMeta,
  articleMetaProps,
} from './article_meta'
import { mock_article_meta } from './M.article_meta'

export default {
  title: 'components/article/Article meta',
  component: ArticleMeta,
  args: mock_article_meta,
  argTypes: {
    createAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta

export const Template: Story<articleMetaProps> = (
  args,
) => <ArticleMeta {...args} />
export const noAuthorAndTags: Story<
  articleMetaProps
> = (args) => (
  <ArticleMeta
    {...args}
    tags={undefined}
    author={undefined}
  />
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
noAuthorAndTags.parameters = {
  backgrounds: {
    default: 'light',
  },
}
