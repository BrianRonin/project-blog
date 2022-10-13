import { Meta, Story } from '@storybook/react/types-6-0'
import { LogoLink, logoLinkProps } from './logo_link'

export default {
  title: 'LogoLink',
  component: LogoLink,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Text: Story<logoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

Text.args = {
  text: 'logo',
  link: 'www.google.com',
}

export const Image: Story<logoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

Image.args = {
  text: 'logo',
  srcImg: '/assets/images/piramide.png',
  link: 'www.google.com',
}
