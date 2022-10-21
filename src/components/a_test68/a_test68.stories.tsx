import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest68, aTest68Props } from './a_test68'
??importMock??

export default {
  title: 'components/a_test68',
  component: ATest68,
  args: ??hasMock??
} as Meta
 // 
 export const Template: Story<aTest68Props > = (args) => <ATest68 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
