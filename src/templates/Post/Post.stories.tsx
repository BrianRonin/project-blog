import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  Post_template,
  postProps_template,
} from './Post'
import { mock_post_template } from './M.Post'

export default {
  title: 'templates/post',
  component: Post_template,
  args: mock_post_template,
} as Meta
// Mock,Chield,Props,Typescript,Test,Storybook
export const Template: Story<
  postProps_template
> = (args) => <Post_template {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light',
  },
}
