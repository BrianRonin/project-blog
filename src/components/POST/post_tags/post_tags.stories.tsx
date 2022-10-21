import { Meta, Story } from '@storybook/react/types-6-0'
import { PostTags, postTagsProps } from './post_tags'

export default {
  title: 'components/post/post tags',
  component: PostTags,
  args: {
    children: <h1>OK</h1>,
  },
  argTypes: {
    //
  },
} as Meta

 export const Template: Story<postTagsProps > = (args) => <PostTags {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
