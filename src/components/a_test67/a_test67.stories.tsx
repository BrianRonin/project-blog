import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest67, aTest67Props } from './a_test67'
??importMock??

export default {
  title: 'components/a_test67',
  component: ATest67,
  args: ??hasMock??
} as Meta
 // 
 export const Template: Story<aTest67Props > = (args) => <ATest67 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
