import { Meta, Story } from '@storybook/react/types-6-0'
import { ArticleHeader, articleHeaderProps } from './article_header'
import { mock_article_header } from './M.article_header'

export default {
  title: 'Article header',
  component: ArticleHeader,
  args: mock_article_header,
  argTypes: {
    //
  },
} as Meta

export const Template: Story<articleHeaderProps> = (args) => (
  <>
    <ArticleHeader {...args} />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum deleniti
      odit deserunt non consectetur voluptatem officiis quae totam. Architecto,
      quia debitis? Reiciendis quas doloribus ab esse nemo sint voluptatibus
      commodi?
    </p>
  </>
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
