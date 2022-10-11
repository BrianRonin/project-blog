import { Meta, Story } from '@storybook/react/types-6-0'
import { Header, headerProps } from './header'
import { mock_header } from './M.header'

export default {
  title: 'Header',
  component: Header,
  args: mock_header,
  argTypes: {
    //
  },
} as Meta

export const Template: Story<headerProps> = (args) => <Header {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
