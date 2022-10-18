import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { theme } from '../../../styles/theme'
import { NavLink, navLinkProps } from './nav_link'

export default {
  title: 'components/Menu & Nav/Nav link',
  component: NavLink,
  args: {
    children: 'children',
    link: 'google.com',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Template: Story<navLinkProps> = (
  args,
) => {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: theme.colors.primary,
        padding: theme.spacings.large,
      }}
    >
      <NavLink {...args} />
      <NavLink {...args} />
      <NavLink {...args} />
      <NavLink {...args} />
      <NavLink {...args} />
    </div>
  )
}
