import { createTheme } from '@mui/material/styles'

export const getTheme = (mode) => createTheme({
  palette: {
    mode: mode, // 'light' ya 'dark'
    primary: {
      main: '#3B82F6',
    },
    secondary: {
      main: '#0F172A',
    },
    background: {
      default: mode === 'light' ? '#f1f5f9' : '#0F172A',
      paper:   mode === 'light' ? '#ffffff'  : '#1e293b',
    },
    text: {
      primary:   mode === 'light' ? '#0F172A' : '#f1f5f9',
      secondary: mode === 'light' ? '#64748B' : '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    button: { textTransform: 'none' },
  },
  shape: {
    borderRadius: 10,
  },
})