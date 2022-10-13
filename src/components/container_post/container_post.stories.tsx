import { Meta, Story } from '@storybook/react/types-6-0'
import { ContainerPost, containerPostProps } from './container_post'

export default {
  title: 'Container post',
  component: ContainerPost,
  args: {
    children: <h1>OK</h1>,
    size: 'content',
  },
  argTypes: {
    //
  },
} as Meta

export const Template: Story<containerPostProps> = (args) => (
  <ContainerPost {...args} />
)

Template.parameters = {
  backgrounds: {
    //  default: 'light'
  },
}
