import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import {
  DefaultTheme,
  ThemeProvider,
} from 'styled-components'
import { dark_theme } from '../../styles/themes/dark'
import { theme as default_theme } from '../../styles/themes/default'

export type theme_provider_props = {
  children: React.ReactNode
}

export type theme_context_values = {
  theme: DefaultTheme
  setTheme: (mode: 'light' | 'dark') => void
}

export const theme_context =
  createContext<theme_context_values>({
    theme: default_theme,
    setTheme: (x) => x,
  })

export const Theme = ({
  children,
}: theme_provider_props) => {
  const [theme, setTheme] = useState(
    default_theme,
  )

  useEffect(() => {
    const localTheme =
      localStorage.getItem('theme')
    if (!localTheme) return
    const newTheme = JSON.parse(localTheme)
    setTheme(newTheme)
  }, [])

  const handle_set_theme: theme_context_values['setTheme'] =
    useCallback((mode) => {
      switch (mode) {
        case 'dark':
          setTheme(dark_theme)
          localStorage.setItem(
            'theme',
            JSON.stringify(dark_theme),
          )
          break
        default:
          setTheme(default_theme)
          localStorage.setItem(
            'theme',
            JSON.stringify(default_theme),
          )
          break
      }
    }, [])

  return (
    <theme_context.Provider
      value={{
        theme,
        setTheme: handle_set_theme,
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </theme_context.Provider>
  )
}
