import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  Posts_template,
  postsProps_template,
} from './Posts'
import { mock_posts_template } from './M.Posts'

export default {
  title: 'templates/posts',
  component: Posts_template,
  args: mock_posts_template,
} as Meta
// Mock,Chield,Props,Typescript,Test,Storybook
export const Template: Story<
  postsProps_template
> = (args) => <Posts_template {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light',
  },
}
