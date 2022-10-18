import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  PostGrid,
  postGridProps,
} from './post_grid'

export default {
  title: 'components/post/Post grid',
  component: PostGrid,
  args: {
    children: <h1>OK</h1>,
  },
  argTypes: {
    //
  },
} as Meta

export const Template: Story<postGridProps> = (
  args,
) => <PostGrid {...args} />

Template.parameters = {
  backgrounds: {
    //  default: 'light'
  },
}
