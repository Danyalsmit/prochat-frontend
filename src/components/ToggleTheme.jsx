import { useThemeContext } from '../context/ThemeContext'
import { IconButton } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext()

  return (
    <IconButton onClick={toggleTheme}>
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  )
}

export default ThemeToggle