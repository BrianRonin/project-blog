import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Post, postProps } from './post'
import { mock_post_template } from './M.post'

export default {
  title: 'components/post/Post',
  component: Post,
  args: mock_post_template,
} as Meta

export const Template: Story<postProps> = (
  args,
) => <Post {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
