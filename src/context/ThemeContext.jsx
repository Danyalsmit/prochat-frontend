import { createContext, useState, useContext } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { getTheme } from '../theme/muiTheme'

export const ThemeContext = createContext()

export const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState(
    localStorage.getItem('themeMode') || 'light'
  )

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('themeMode', newMode)
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)