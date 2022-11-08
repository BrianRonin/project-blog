import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import { theme } from './themes/default'

export const renderTheme = (children: any) => {
  return render(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>,
  )
}
