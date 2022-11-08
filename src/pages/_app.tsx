import { ThemeProvider } from 'styled-components'
import { Theme } from '../contexts/theme/theme'
import { GlobalStyles } from '../styles/global-styles'
import { theme } from '../styles/themes/default'

function MyApp({ Component, pageProps }: any) {
  return (
    <Theme>
      <Component {...pageProps} />
      <GlobalStyles />
    </Theme>
  )
}

export default MyApp
