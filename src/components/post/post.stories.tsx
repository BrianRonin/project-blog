import { Meta, Story } from '@storybook/react/types-6-0'
import { Post, postProps } from './post'
import { mock_post } from './M.post'

export default {
  title: 'Post',
  component: Post,
  args: mock_post,
  argTypes: {
    //
  },
} as Meta

export const Template: Story<postProps> = (args) => <Post {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
