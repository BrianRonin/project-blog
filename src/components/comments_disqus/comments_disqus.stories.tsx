import { Meta, Story } from '@storybook/react/types-6-0'
import { CommentsDisqus, commentsDisqusProps } from './comments_disqus'
import { mock_comments_disqus } from './M.comments_disqus'

export default {
  title: 'components/comments disqus',
  component: CommentsDisqus,
  args: mock_comments_disqus
} as Meta

 export const Template: Story<commentsDisqusProps > = (args) => <CommentsDisqus {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
