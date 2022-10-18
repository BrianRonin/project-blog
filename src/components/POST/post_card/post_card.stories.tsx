import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { mock_post_card } from './M.post_card'
import {
  PostCard,
  postCardProps,
} from './post_card'

export default {
  title: 'components/post/Post card',
  component: PostCard,
  args: mock_post_card,
  argTypes: {
    //
  },
} as Meta

export const Template: Story<postCardProps> = (
  args,
) => <PostCard {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
