import { Meta, Story } from '@storybook/react/types-6-0'
import { Cover, coverProps } from './cover'
import { mock_cover } from './M.cover'

export default {
  title: 'Cover',
  component: Cover,
  args: mock_cover,
  argTypes: {
    //
  },
} as Meta

export const Template: Story<coverProps> = (args) => <Cover {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
