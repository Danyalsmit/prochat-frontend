import { BrowserRouter } from 'react-router-dom'
import { ThemeProviderWrapper } from '../context/ThemeContext'
import { AuthProvider } from '../context/AuthContext'

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProviderWrapper>
        <AuthProvider>
            {children}
        </AuthProvider>
      </ThemeProviderWrapper>
    </BrowserRouter>
  )
}

export default AppProviders