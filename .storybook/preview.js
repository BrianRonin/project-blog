import { Theme } from '../src/contexts/theme/theme'
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/themes/default'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'light',
        value: theme.colors.lightBg,
      },
      {
        name: 'dark2',
        value: theme.colors.darkBg,
      },
      {
        name: 'dark',
        value: 'black',
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
      <GlobalStyles />
    </Theme>
  ),
]
