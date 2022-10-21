import { Meta, Story } from '@storybook/react/types-6-0'
import { Body, bodyProps } from './body'

import { mock_article_meta } from "../article_meta/M.article_meta";

export default {
  title: 'components//ARTICLE/body',
  component: Body,
  args: ??hasMock??
} as Meta
 // 
 export const Template: Story<bodyProps > = (args) => <Body {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
