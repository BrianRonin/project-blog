import { Meta, Story } from '@storybook/react/types-6-0'
import { ArticleMeta, articleMetaProps } from './article_meta'
import { mock_article_meta } from './M.article_meta'

export default {
  title: 'Article meta',
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

export const Template: Story<articleMetaProps> = (args) => (
  <ArticleMeta {...args} />
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
